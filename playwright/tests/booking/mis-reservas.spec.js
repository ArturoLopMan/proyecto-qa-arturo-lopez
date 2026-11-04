import { test, expect } from '../fixture';

test.describe('Mis reservas', () => {
  test('ver el detalle de una reserva recien creada', async ({
    page, bookingPage, myBookingsPage, bookingDetailPage, reservaCreada,
  }) => {
    // Desde la confirmación hacia "Mis reservas"
    await bookingPage.buttonViewMyBookings.click();
    await expect(page).toHaveURL(/\/bookings$/);

    // La tarjeta de ESTA reserva
    const tarjeta = myBookingsPage.tarjetaDe(reservaCreada.ref);
    await expect(tarjeta).toBeVisible();
    await expect(tarjeta.getByText(`${reservaCreada.tickets} tickets`)).toBeVisible();
    await expect(tarjeta.getByText(`$${reservaCreada.total}`, { exact: true })).toBeVisible();

    const nombreEvento = (await tarjeta.getByRole('heading', { level: 3 }).textContent()).trim();
    const idReserva = (await tarjeta.getByTestId('booking-id').textContent()).trim().replace('#', '');

    // Abrir el detalle
    await myBookingsPage.abrirDetalle(reservaCreada.ref);
    await expect(page).toHaveURL(new RegExp(`/bookings/${idReserva}$`));

    // Cabecera
    await expect(bookingDetailPage.badgeEstado).toBeVisible();
    await expect(bookingDetailPage.titulo(nombreEvento)).toBeVisible();

    // Customer Details
    await expect(bookingDetailPage.valorDe('Name')).toHaveText(reservaCreada.nombre);
    await expect(bookingDetailPage.valorDe('Email')).toHaveText(reservaCreada.email);
    await expect(bookingDetailPage.valorDe('Phone')).toHaveText(reservaCreada.telefono);

    // Payment Summary
    await expect(bookingDetailPage.valorDe('Tickets')).toHaveText(String(reservaCreada.tickets));
    await expect(bookingDetailPage.valorDe('Price per ticket')).toHaveText(`$${reservaCreada.precioTicket}`);
    await expect(bookingDetailPage.valorDe('Total Paid')).toHaveText(`$${reservaCreada.total}`);

    // Booking Information
    await expect(bookingDetailPage.valorDe('Booking ID')).toHaveText(`#${idReserva}`);
  });
});