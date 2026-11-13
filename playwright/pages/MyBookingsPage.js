export class MyBookingsPage {
  constructor(page) {
    this.page = page;
    this.bookingCards = page.getByTestId('booking-card');
  }

  // Tarjeta que contiene esa referencia de reserva
  getBookingCard(bookingRef) {
    return this.bookingCards.filter({ has: this.page.getByText(bookingRef, { exact: true }) });
  }

  async openBookingDetails(bookingRef) {
    await this.getBookingCard(bookingRef).getByRole('button', { name: 'View Details' }).click();
  }
}