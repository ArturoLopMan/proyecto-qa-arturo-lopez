import { test, expect } from '../fixture';

test.describe('Mis reservas', () => {
  test('CP-BOOK-02: el detalle de una reserva creada muestra sus datos', async ({
    page, bookingPage, myBookingsPage, bookingDetailPage, createdBooking,
  }) => {
    // Desde la confirmación hacia "Mis reservas"
    await bookingPage.viewMyBookingsButton.click();
    await expect(page).toHaveURL(/\/bookings$/);

    // La tarjeta de ESTA reserva
    const bookingCard = myBookingsPage.getBookingCard(createdBooking.bookingRef);
    await expect(bookingCard).toBeVisible();
    await expect(bookingCard.getByText(`${createdBooking.tickets} tickets`)).toBeVisible();
    await expect(bookingCard.getByText(`$${createdBooking.total}`, { exact: true })).toBeVisible();

    const eventName = (await bookingCard.getByRole('heading', { level: 3 }).textContent()).trim();
    const bookingId = (await bookingCard.getByTestId('booking-id').textContent()).trim().replace('#', '');

    // Abrir el detalle
    await myBookingsPage.openBookingDetails(createdBooking.bookingRef);
    await expect(page).toHaveURL(new RegExp(`/bookings/${bookingId}$`));

    // Cabecera
    await expect(bookingDetailPage.statusBadge).toBeVisible();
    await expect(bookingDetailPage.getEventTitle(eventName)).toBeVisible();

    // Customer Details
    await expect(bookingDetailPage.getFieldValue('Name')).toHaveText(createdBooking.name);
    await expect(bookingDetailPage.getFieldValue('Email')).toHaveText(createdBooking.email);
    await expect(bookingDetailPage.getFieldValue('Phone')).toHaveText(createdBooking.phone);

    // Payment Summary
    await expect(bookingDetailPage.getFieldValue('Tickets')).toHaveText(String(createdBooking.tickets));
    await expect(bookingDetailPage.getFieldValue('Price per ticket')).toHaveText(`$${createdBooking.ticketPrice}`);
    await expect(bookingDetailPage.getFieldValue('Total Paid')).toHaveText(`$${createdBooking.total}`);

    // Booking Information
    await expect(bookingDetailPage.getFieldValue('Booking ID')).toHaveText(`#${bookingId}`);
  });
});