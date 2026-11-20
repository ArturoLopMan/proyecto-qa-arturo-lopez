import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EventsPage } from '../pages/EventsPage';
import { BookingPage } from '../pages/BookingPage';
import { MyBookingsPage } from '../pages/MyBookingsPage';
import { BookingDetailPage } from '../pages/BookingDetailPage';
import NEW_EVENT from '../test-data/new-event.json';
import { getFutureDateTime } from './utils/date-helpers';
import { ManageEventsPage } from '../pages/ManageEventsPage';
import { formatPrice } from './utils/price-helpers';
import BOOKING_DATA from '../test-data/booking-data.json';

// El formulario de reserva arranca con 1 ticket
export const DEFAULT_TICKETS = 1;
const REQUIRED_ENV_VARS = ['LOGIN_USER', 'LOGIN_PASSWORD'];

export const test = base.extend({
  // Credenciales desde .env
  credentials: [
  async ({}, use) => {
    const missingVars = REQUIRED_ENV_VARS.filter((name) => !process.env[name]?.trim());
    if (missingVars.length > 0) {
      throw new Error(`Faltan variables de entorno en el archivo .env: ${missingVars.join(', ')}`);
    }
    await use({
      user: process.env.LOGIN_USER,
      password: process.env.LOGIN_PASSWORD,
    });
  },
  { scope: 'worker' },

],
newEventData: async ({ manageEventsPage }, use) => {
  const eventData = {
    ...NEW_EVENT,
    title: `${NEW_EVENT.titlePrefix} ${Date.now()}`,
    dateTime: getFutureDateTime(NEW_EVENT.daysAhead),
  };

  await use(eventData);

  // Limpieza: se ejecuta después del test, pase o falle
  await manageEventsPage.deleteEventIfExists(eventData.title);
},
manageEventsPage: async ({ authenticatedPage }, use) => {
  await use(new ManageEventsPage(authenticatedPage));
},


// Sesión de EventHub: se inicia sesión UNA vez por worker y se guarda en memoria.
// EventHub guarda el token en localStorage (eventhub_token) y storageState lo captura.
eventhubStorageState: [
  async ({ browser, credentials }, use) => {
    const context = await browser.newContext({ baseURL: process.env.BASE_URL });
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.openLogin();
    await loginPage.login(credentials.user, credentials.password);
    await expect(loginPage.featuredEventsText).toBeVisible();
    await expect
      .poll(() => page.evaluate(() => localStorage.getItem('eventhub_token')))
      .toBeTruthy();

    const state = await context.storageState();
    await context.close();
    await use(state);
  },
  { scope: 'worker' },
],

// Cada test arranca con la sesión guardada
storageState: async ({ eventhubStorageState }, use) => {
  await use(eventhubStorageState);
},

  // Página de login abierta
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLogin();
    await use(loginPage);
  },

  // Sesión iniciada: reutiliza loginPage y credentials
  authenticatedPage: async ({ page }, use) => {
  await page.goto('/');
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

  // Datos del cliente para la reserva (se pueden sobrescribir en un test)
bookingData: async ({}, use) => {
  await use({ ...BOOKING_DATA });
},

  // Precondición: deja una reserva hecha y entrega sus datos
  createdBooking: async ({ eventsPage, bookingPage, bookingData, createdEvent }, use) => {
    await eventsPage.openEvents();
    await eventsPage.bookEvent(createdEvent.title);
    await expect(bookingPage.ticketPriceLabel).toHaveText(formatPrice(createdEvent.price));
    const ticketPrice = createdEvent.price;

    await bookingPage.addTickets(bookingData.extraTickets);
    await bookingPage.fillCustomerDetails(bookingData);
    await bookingPage.confirmBooking();

    await expect(bookingPage.bookingRefLabel).toBeVisible();
    const bookingRef = (await bookingPage.bookingRefLabel.textContent()).trim();
    const tickets = DEFAULT_TICKETS + bookingData.extraTickets;

    await use({ ...bookingData, bookingRef, tickets, ticketPrice, total: ticketPrice * tickets });
  },

  // Precondición: un evento propio para el test (se elimina al final con el teardown de newEventData)
  createdEvent: async ({ manageEventsPage, newEventData }, use) => {
    await manageEventsPage.openManageEvents();
    await manageEventsPage.createEvent(newEventData);
    await expect(manageEventsPage.getEventRow(newEventData.title)).toBeVisible();
    await use(newEventData);
  },

});

export { expect };