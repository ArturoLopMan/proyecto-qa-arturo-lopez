import { test, expect, DEFAULT_TICKETS } from '../fixture';
import TICKET_QUANTITIES from '../../test-data/ticket-quantities.json';
import { formatPrice } from '../utils/price-helpers';

test.describe('Reserva con distintas cantidades de tickets', () => {
  for (const { id, extraTickets } of TICKET_QUANTITIES) {
    const totalTickets = DEFAULT_TICKETS + extraTickets;

    test(`${id}: reserva de ${totalTickets} ticket(s) calcula el total correcto`, async ({
      eventsPage, bookingPage, bookingData, createdEvent,
    }) => {
      const ticketPrice = createdEvent.price;

      await eventsPage.openEvents();
      await eventsPage.bookEvent(createdEvent.title);
      await expect(bookingPage.ticketPriceLabel).toHaveText(formatPrice(ticketPrice));


      // Ajustar la cantidad
      await bookingPage.addTickets(extraTickets);
      await expect(bookingPage.ticketCountLabel).toHaveText(String(totalTickets));

      await bookingPage.fillCustomerDetails(bookingData);
      await bookingPage.confirmBooking();

      // La confirmación refleja cantidad y total
      await expect(bookingPage.bookingRefLabel).toBeVisible();
      await expect(bookingPage.getFieldValue('Tickets')).toHaveText(String(totalTickets));
      await expect(bookingPage.getFieldValue('Total')).toHaveText(formatPrice(ticketPrice * totalTickets));
    });
  }
});