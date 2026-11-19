import { test, expect, DEFAULT_TICKETS } from '../fixture';
import { formatPrice } from '../utils/price-helpers';

test.describe('Flujo transaccional', () => {
  test('CP-FLOW-01: evento creado se reserva y la reserva aparece en mis reservas', async ({
    manageEventsPage, eventsPage, bookingPage, myBookingsPage, bookingDetailPage,
    newEventData, bookingData,
  }) => {
    const totalTickets = DEFAULT_TICKETS + bookingData.extraTickets;
    const expectedTotal = newEventData.price * totalTickets;
    let bookingRef;

    await test.step('Crear el evento', async () => {
      await manageEventsPage.openManageEvents();
      await manageEventsPage.createEvent(newEventData);
    });

    await test.step('Verificar el evento en la grilla', async () => {
      const eventRow = manageEventsPage.getEventRow(newEventData.title);
      await expect(eventRow).toBeVisible();
      await expect(eventRow).toContainText(`${newEventData.totalSeats}/${newEventData.totalSeats}`);
    });

    await test.step('Reservar el evento creado', async () => {
      await eventsPage.openEvents();
      await eventsPage.bookEvent(newEventData.title);
      await expect(bookingPage.ticketPriceLabel).toHaveText(formatPrice(newEventData.price));

      await bookingPage.addTickets(bookingData.extraTickets);
      await bookingPage.fillCustomerDetails(bookingData);
      await bookingPage.confirmBooking();

      await expect(bookingPage.bookingRefLabel).toBeVisible();
      bookingRef = (await bookingPage.bookingRefLabel.textContent()).trim();
      await expect(bookingPage.getFieldValue('Total')).toHaveText(formatPrice(expectedTotal));
    });

    await test.step('Verificar la reserva en mis reservas', async () => {
      await bookingPage.viewMyBookingsButton.click();
      const bookingCard = myBookingsPage.getBookingCard(bookingRef);
      await expect(bookingCard).toBeVisible();
      await expect(bookingCard).toContainText(newEventData.title);

      await myBookingsPage.openBookingDetails(bookingRef);
      await expect(bookingDetailPage.getEventTitle(newEventData.title)).toBeVisible();
      await expect(bookingDetailPage.getFieldValue('Tickets')).toHaveText(String(totalTickets));
      await expect(bookingDetailPage.getFieldValue('Total Paid')).toHaveText(formatPrice(expectedTotal));
    });

    await test.step('Verificar que se descontaron los asientos', async () => {
      await manageEventsPage.openManageEvents();
      await expect(manageEventsPage.getEventRow(newEventData.title))
        .toContainText(`${newEventData.totalSeats - totalTickets}/${newEventData.totalSeats}`);
    });
  });
});