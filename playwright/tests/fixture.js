import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EventsPage } from '../pages/EventsPage';
import { BookingPage } from '../pages/BookingPage';
import { MyBookingsPage } from '../pages/MyBookingsPage';
import { BookingDetailPage } from '../pages/BookingDetailPage';

// El formulario de reserva arranca con 1 ticket
export const DEFAULT_TICKETS = 1;

export const test = base.extend({
  // Credenciales desde .env, con validación temprana
  credentials: async ({}, use) => {
    const user = process.env.LOGIN_USER;
    const password = process.env.LOGIN_PASSWORD;
    if (!user || !password) {
      throw new Error('Faltan LOGIN_USER o LOGIN_PASSWORD en el archivo .env');
    }
    await use({ user, password });
  },

  // Página de login abierta
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLogin();
    await use(loginPage);
  },

  // Sesión iniciada: reutiliza loginPage y credentials
  authenticatedPage: async ({ page, loginPage, credentials }, use) => {
    await loginPage.login(credentials.user, credentials.password);
    await expect(loginPage.featuredEventsText).toBeVisible();
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

  // Datos de la reserva (se pueden sobrescribir en un test)
  bookingData: async ({}, use) => {
    await use({
      name: 'Arturo Lopez',
      email: 'arturoqa@gmail.com',
      phone: '+51 999888111',
      extraTickets: 1,
    });
  },

  // Precondición: deja una reserva hecha y entrega sus datos
  createdBooking: async ({ eventsPage, bookingPage, bookingData }, use) => {
    await eventsPage.bookFirstAvailableEvent();
    await expect(bookingPage.ticketPriceLabel).toHaveText(/\$\d+/);
    const ticketPrice = await bookingPage.getTicketPrice();

    await bookingPage.addTickets(bookingData.extraTickets);
    await bookingPage.fillCustomerDetails(bookingData);
    await bookingPage.confirmBooking();

    await expect(bookingPage.bookingRefLabel).toBeVisible();
    const bookingRef = (await bookingPage.bookingRefLabel.textContent()).trim();
    const tickets = DEFAULT_TICKETS + bookingData.extraTickets;

    await use({ ...bookingData, bookingRef, tickets, ticketPrice, total: ticketPrice * tickets });
  },
});

export { expect };