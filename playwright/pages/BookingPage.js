import { BasePage } from './BasePage';

export class BookingPage extends BasePage {
  constructor(page) {
    super(page);

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
    // pulsa el boton + la veces que se indique para añadir tickets
  async addTickets(quantity) {
    for (let i = 0; i < quantity; i++) {
      await this.addTicketButton.click();
    }
  }
  //llena datos de cliente
  async fillCustomerDetails({ name, email, phone }) {
    await this.fullNameInput.fill(name);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }
  // confirma la reserva
  async confirmBooking() {
    await this.confirmBookingButton.click();
  }
}