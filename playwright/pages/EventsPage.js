export class EventsPage {
  constructor(page) {
    this.page = page;
    // "disponible" = enlace habilitado (aria-disabled="false")
    this.linksBookNowDisponibles = page.getByRole('link', { name: 'Book Now', disabled: false });
  }

  // "Cualquier evento disponible": aquí .first() es intencional.
  async reservarPrimerEventoDisponible() {
    await this.linksBookNowDisponibles.first().click();
  }
}