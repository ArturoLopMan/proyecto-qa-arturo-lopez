export class EventsPage {
  constructor(page) {
    this.page = page;

    // "Disponible" = enlace habilitado (aria-disabled="false")
    this.availableBookNowLinks = page.getByRole('link', { name: 'Book Now', disabled: false });
  }

  // Cualquier evento disponible: aquí .first() es intencional
  async bookFirstAvailableEvent() {
    await this.availableBookNowLinks.first().click();
  }
}