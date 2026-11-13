export class BookingDetailPage {
  constructor(page) {
    this.page = page;
    this.statusBadge = page.getByText('confirmed', { exact: true });
    this.cancelBookingButton = page.getByTestId('cancel-booking-btn');
  }

  getEventTitle(eventName) {
    return this.page.getByRole('heading', { name: eventName });
  }

  // Valor que aparece junto a una etiqueta (Name, Email, Tickets, Total Paid...)
  getFieldValue(label) {
    return this.page
      .getByText(label, { exact: true })
      .locator('xpath=following-sibling::*[1]');
  }
}