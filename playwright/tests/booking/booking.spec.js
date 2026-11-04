import { test, expect } from '../fixture';

const reserva = {
  nombre: 'Arturo Lopez',
  email: 'Arturo.qa@gmail.com',
  telefono: '+51 999888111',
};

const TICKETS_POR_DEFECTO = 1;
const TICKETS_EXTRA = 1;
const TOTAL_TICKETS = TICKETS_POR_DEFECTO + TICKETS_EXTRA;

test.describe('Reserva de evento (Book Now)', () => {
  test('reservar un evento disponible y validar la confirmacion', async ({ page, eventsPage, bookingPage }) => {
    await eventsPage.reservarPrimerEventoDisponible();
    await expect(page).toHaveURL(/\/events\/\d+/);

    // Estado inicial: 1 ticket y el precio de un ticket
    await expect(bookingPage.labelTicketCount).toHaveText(String(TICKETS_POR_DEFECTO));
    await expect(bookingPage.labelPrecioTicket).toHaveText(/\$\d+/);
    const precioTicket = await bookingPage.leerPrecioTicket();
    const totalEsperado = precioTicket * TOTAL_TICKETS;

    // Sumar tickets: cambia la cantidad, el precio por ticket no
    await bookingPage.agregarTickets(TICKETS_EXTRA);
    await expect(bookingPage.labelTicketCount).toHaveText(String(TOTAL_TICKETS));
    await expect(bookingPage.labelPrecioTicket).toHaveText(`$${precioTicket}`);

    await bookingPage.llenarDatos(reserva);
    await bookingPage.confirmar();

    // Confirmación en la misma URL
    await expect(page).toHaveURL(/\/events\/\d+/);
    await expect(bookingPage.bookingRef).toBeVisible();
    await expect(bookingPage.valorDe('Customer')).toHaveText(reserva.nombre);
    await expect(bookingPage.valorDe('Tickets')).toHaveText(String(TOTAL_TICKETS));
    await expect(bookingPage.valorDe('Total')).toHaveText(`$${totalEsperado}`);
  });
});