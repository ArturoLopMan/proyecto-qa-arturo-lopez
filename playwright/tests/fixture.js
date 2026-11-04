import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { EventsPage } from '../pages/EventsPage';
import { BookingPage } from '../pages/BookingPage';
import { MyBookingsPage } from '../pages/MyBookingsPage';
import { BookingDetailPage } from '../pages/BookingDetailPage';

export const test = base.extend({
  credentials: async ({}, use) => {
    const user = process.env.LOGIN_USER;
    const password = process.env.LOGIN_PASSWORD;
    if (!user || !password) {
      throw new Error('Faltan LOGIN_USER o LOGIN_PASSWORD en el archivo .env');
    }
    await use({ user, password });
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.abrirLogin();
    await use(loginPage);
  },

  paginaAutenticada: async ({ page, loginPage, credentials }, use) => {
    await loginPage.iniciarSesion(credentials.user, credentials.password);
    await expect(loginPage.messageFeaturedEvents).toBeVisible();
    await use(page);
  },

  eventsPage: async ({ paginaAutenticada }, use) => {
    await use(new EventsPage(paginaAutenticada));
  },

  bookingPage: async ({ paginaAutenticada }, use) => {
    await use(new BookingPage(paginaAutenticada));
  },

  myBookingsPage: async ({ paginaAutenticada }, use) => {
    await use(new MyBookingsPage(paginaAutenticada));
  },

  bookingDetailPage: async ({ paginaAutenticada }, use) => {
    await use(new BookingDetailPage(paginaAutenticada));
  },

  // Datos de la reserva (se pueden sobrescribir en un test)
  datosReserva: async ({}, use) => {
    await use({
      nombre: 'Arturo Lopez',
      email: 'arturoqa@gmail.com',
      telefono: '+51 999888111',
      ticketsExtra: 1,
    });
  },

  // Precondición: deja una reserva hecha y entrega sus datos
  reservaCreada: async ({ eventsPage, bookingPage, datosReserva }, use) => {
    await eventsPage.reservarPrimerEventoDisponible();
    await expect(bookingPage.labelPrecioTicket).toHaveText(/\$\d+/);
    const precioTicket = await bookingPage.leerPrecioTicket();

    await bookingPage.agregarTickets(datosReserva.ticketsExtra);
    await bookingPage.llenarDatos(datosReserva);
    await bookingPage.confirmar();

    await expect(bookingPage.bookingRef).toBeVisible();
    const ref = (await bookingPage.bookingRef.textContent()).trim();
    const tickets = 1 + datosReserva.ticketsExtra;

    await use({ ...datosReserva, ref, tickets, precioTicket, total: precioTicket * tickets });
  },
});

export { expect };