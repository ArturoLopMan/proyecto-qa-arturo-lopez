import { test as base, expect } from "@playwright/test";

// Page Objects
import { LoginPage } from "../pages/LoginPage";
import { EventsPage } from "../pages/EventsPage";
import { BookingPage } from "../pages/BookingPage";
import { MyBookingsPage } from "../pages/MyBookingsPage";
import { BookingDetailPage } from "../pages/BookingDetailPage";
import { ManageEventsPage } from "../pages/ManageEventsPage";

// Datos de prueba
import NEW_EVENT from "../test-data/new-event.json";
import BOOKING_DATA from "../test-data/booking-data.json";

// Helpers
import { getFutureDateTime } from "./utils/date-helpers";
import { formatPrice } from "./utils/price-helpers";

// El formulario de reserva arranca con 1 ticket
export const DEFAULT_TICKETS = 1;

// Variables de entorno obligatorias para iniciar sesión
const REQUIRED_ENV_VARS = ["LOGIN_USER", "LOGIN_PASSWORD"];

// Clave donde EventHub guarda el token de sesión en localStorage
const TOKEN_KEY = "eventhub_token";

export const test = base.extend({
  // ---------- Sesión (una vez por worker) ----------

  // Credenciales desde .env, con validación temprana
  credentials: [
    async ({}, use) => {
      const missingVars = REQUIRED_ENV_VARS.filter(
        (name) => !process.env[name]?.trim(),
      );
      if (missingVars.length > 0) {
        throw new Error(
          `Faltan variables de entorno en el archivo .env: ${missingVars.join(", ")}`,
        );
      }
      await use({
        user: process.env.LOGIN_USER,
        password: process.env.LOGIN_PASSWORD,
      });
    },
    { scope: "worker" },
  ],

  // Sesión de EventHub: se inicia sesión UNA vez por worker y se guarda en memoria.
  // EventHub guarda el token en localStorage y storageState lo captura.
  eventhubStorageState: [
    async ({ browser, credentials }, use) => {
      const context = await browser.newContext({
        baseURL: process.env.BASE_URL,
      });
      const page = await context.newPage();
      const loginPage = new LoginPage(page);

      await loginPage.openLogin();
      await loginPage.login(credentials.user, credentials.password);
      await expect(loginPage.featuredEventsText).toBeVisible();
      await expect
        .poll(() => page.evaluate((key) => localStorage.getItem(key), TOKEN_KEY))
        .toBeTruthy();

      const state = await context.storageState();
      await context.close();
      await use(state);
    },
    { scope: "worker" },
  ],

  // Cada test inicia con la sesión guardada
  storageState: async ({ eventhubStorageState }, use) => {
    await use(eventhubStorageState);
  },

  // ---------- Páginas ----------

  // Página de login abierta (para los tests de login, que arrancan sin sesión)
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLogin();
    await use(loginPage);
  },

  // Página con sesión iniciada, en la portada (la sesión llega por storageState)
  authenticatedPage: async ({ page }, use) => {
    await page.goto("/");
    await use(page);
  },

  eventsPage: async ({ authenticatedPage }, use) => {
    await use(new EventsPage(authenticatedPage));
  },

  bookingPage: async ({ authenticatedPage }, use) => {
    await use(new BookingPage(authenticatedPage));
  },

  myBookingsPage: async ({ authenticatedPage }, use) => {
    await use(new MyBookingsPage(authenticatedPage));
  },

  bookingDetailPage: async ({ authenticatedPage }, use) => {
    await use(new BookingDetailPage(authenticatedPage));
  },

  manageEventsPage: async ({ authenticatedPage }, use) => {
    await use(new ManageEventsPage(authenticatedPage));
  },

  // ---------- Datos y precondiciones ----------

  // Datos del cliente para la reserva (se pueden sobrescribir en un test)
  bookingData: async ({}, use) => {
    await use({ ...BOOKING_DATA });
  },

  // Datos de un evento nuevo con título único y fecha futura.
  // Limpieza: después del test, pase o falle, elimina el evento si existe
  // (al eliminarlo, EventHub borra también sus reservas).
  newEventData: async ({ manageEventsPage }, use) => {
    const eventData = {
      ...NEW_EVENT,
      title: `${NEW_EVENT.titlePrefix} ${Date.now()}`,
      dateTime: getFutureDateTime(NEW_EVENT.daysAhead),
    };

    await use(eventData);

    await manageEventsPage.deleteEventIfExists(eventData.title);
  },

  // Precondición: un evento propio para el test (se elimina con el teardown de newEventData)
  createdEvent: async ({ manageEventsPage, newEventData }, use) => {
    await manageEventsPage.openManageEvents();
    await manageEventsPage.createEvent(newEventData);
    await expect(
      manageEventsPage.getEventRow(newEventData.title),
    ).toBeVisible();
    await use(newEventData);
  },

  // Precondición: una reserva hecha sobre el evento propio, y sus datos
  createdBooking: async (
    { eventsPage, bookingPage, bookingData, createdEvent },
    use,
  ) => {
    await eventsPage.openEvents();
    await eventsPage.bookEvent(createdEvent.title);
    await expect(bookingPage.ticketPriceLabel).toHaveText(
      formatPrice(createdEvent.price),
    );
    const ticketPrice = createdEvent.price;

    await bookingPage.addTickets(bookingData.extraTickets);
    await bookingPage.fillCustomerDetails(bookingData);
    await bookingPage.confirmBooking();

    await expect(bookingPage.bookingRefLabel).toBeVisible();
    const bookingRef = (await bookingPage.bookingRefLabel.textContent()).trim();
    const tickets = DEFAULT_TICKETS + bookingData.extraTickets;

    await use({
      ...bookingData,
      eventTitle: createdEvent.title,
      bookingRef,
      tickets,
      ticketPrice,
      total: ticketPrice * tickets,
    });
  },
});

export { expect };