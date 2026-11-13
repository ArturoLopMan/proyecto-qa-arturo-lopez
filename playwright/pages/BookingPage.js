export class BookingPage {
  constructor(page) {
    this.page = page;

    // Formulario de reserva
    this.addTicketButton = page.getByRole('button', { name: '+', exact: true });
    this.ticketCountLabel = page.locator('#ticket-count');
    this.ticketPriceLabel = page.locator('span.text-2xl.font-bold'); // precio de UN ticket
    this.fullNameInput = page.getByRole('textbox', { name: 'Full name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email' });
    this.phoneInput = page.getByRole('textbox', { name: 'Phone' });
    this.confirmBookingButton = page.getByRole('button', { name: 'Confirm Booking' });

    // Confirmación
    this.bookingRefLabel = page.locator('.booking-ref');
    this.viewMyBookingsButton = page.getByRole('button', { name: 'View My Bookings' });
  }

  async addTickets(quantity) {
    for (let i = 0; i < quantity; i++) {
      await this.addTicketButton.click();
    }
  }

  async getTicketPrice() {
    const priceText = await this.ticketPriceLabel.textContent();
    return Number(priceText.replace(/[^0-9.]/g, ''));
  }

  async fillCustomerDetails({ name, email, phone }) {
    await this.fullNameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }

  async confirmBooking() {
    await this.confirmBookingButton.click();
  }

  // Valor que aparece junto a una etiqueta de la confirmación (Customer, Tickets, Total)
  getFieldValue(label) {
    return this.page
      .getByText(label, { exact: true })
      .locator('xpath=following-sibling::*[1]');
  }
}