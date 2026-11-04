export class BookingPage {
  constructor(page) {
    this.page = page;

    // Formulario
    this.buttonAddTicket = page.getByRole('button', { name: '+', exact: true });
    this.labelTicketCount = page.locator('#ticket-count');
    this.labelPrecioTicket = page.locator('span.text-2xl.font-bold'); // precio de UN ticket
    this.inputFullName = page.getByRole('textbox', { name: 'Full name' });
    this.inputEmail = page.getByRole('textbox', { name: 'Email' });
    this.inputPhone = page.getByRole('textbox', { name: 'Phone' });
    this.buttonConfirm = page.getByRole('button', { name: 'Confirm Booking' });

    // Confirmación
    this.bookingRef = page.locator('.booking-ref');
    this.buttonViewMyBookings = page.getByRole('button', { name: 'View My Bookings' });
  }

  async agregarTickets(cantidad) {
    for (let i = 0; i < cantidad; i++) {
      await this.buttonAddTicket.click();
    }
  }

  async leerPrecioTicket() {
    const texto = await this.labelPrecioTicket.textContent();
    return Number(texto.replace(/[^0-9.]/g, ''));
  }

  async llenarDatos({ nombre, email, telefono }) {
    await this.inputFullName.fill(nombre);
    await this.inputEmail.fill(email);
    await this.inputPhone.fill(telefono);
  }

  async confirmar() {
    await this.buttonConfirm.click();
  }

  // Valor que aparece junto a una etiqueta de la confirmación (Customer, Tickets, Total)
  valorDe(etiqueta) {
    return this.page
      .getByText(etiqueta, { exact: true })
      .locator('xpath=following-sibling::*[1]');
  }
}