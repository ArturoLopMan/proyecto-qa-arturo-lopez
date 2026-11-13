import { test, expect, DEFAULT_TICKETS } from '../fixture';

test.describe('Reserva de evento (Book Now)', () => {
  test('CP-BOOK-01: reserva de un evento disponible muestra la confirmación con el total correcto', async ({
    page, eventsPage, bookingPage, bookingData,
  }) => {
    const totalTickets = DEFAULT_TICKETS + bookingData.extraTickets;

    await eventsPage.bookFirstAvailableEvent();
    await expect(page).toHaveURL(/\/events\/\d+/);

    // Estado inicial: 1 ticket y el precio de un ticket
    await expect(bookingPage.ticketCountLabel).toHaveText(String(DEFAULT_TICKETS));
    await expect(bookingPage.ticketPriceLabel).toHaveText(/\$\d+/);
    const ticketPrice = await bookingPage.getTicketPrice();
    const expectedTotal = ticketPrice * totalTickets;

    // Sumar tickets: cambia la cantidad, el precio por ticket no
    await bookingPage.addTickets(bookingData.extraTickets);
    await expect(bookingPage.ticketCountLabel).toHaveText(String(totalTickets));
    await expect(bookingPage.ticketPriceLabel).toHaveText(`$${ticketPrice}`);

    await bookingPage.fillCustomerDetails(bookingData);
    await bookingPage.confirmBooking();

    // Confirmación en la misma URL
    await expect(page).toHaveURL(/\/events\/\d+/);
    await expect(bookingPage.bookingRefLabel).toBeVisible();
    await expect(bookingPage.getFieldValue('Customer')).toHaveText(bookingData.name);
    await expect(bookingPage.getFieldValue('Tickets')).toHaveText(String(totalTickets));
    await expect(bookingPage.getFieldValue('Total')).toHaveText(`$${expectedTotal}`);
  });
});