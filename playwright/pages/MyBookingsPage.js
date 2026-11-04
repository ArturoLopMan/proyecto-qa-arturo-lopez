export class MyBookingsPage {
  constructor(page) {
    this.page = page;
    this.tarjetas = page.getByTestId('booking-card');
  }

  // La tarjeta que contiene esa referencia de reserva
  tarjetaDe(ref) {
    return this.tarjetas.filter({ has: this.page.getByText(ref, { exact: true }) });
  }

  async abrirDetalle(ref) {
    await this.tarjetaDe(ref).getByRole('button', { name: 'View Details' }).click();
  }
}