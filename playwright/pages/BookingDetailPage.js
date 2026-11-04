export class BookingDetailPage {
  constructor(page) {
    this.page = page;
    this.badgeEstado = page.getByText('confirmed', { exact: true });
    this.buttonCancelBooking = page.getByTestId('cancel-booking-btn');
  }

  titulo(nombreEvento) {
    return this.page.getByRole('heading', { name: nombreEvento });
  }

  // Valor que aparece junto a una etiqueta (Name, Email, Tickets, Total Paid...)
  valorDe(etiqueta) {
    return this.page
      .getByText(etiqueta, { exact: true })
      .locator('xpath=following-sibling::*[1]');
  }
}