export class EventsPage {
  constructor(page) {
    this.page = page;
    this.eventsNavLink = page.getByTestId('nav-events');
    this.eventCards = page.getByTestId('event-card');

    // "Disponible" = enlace habilitado (aria-disabled="false")
    this.availableBookNowLinks = page.getByRole('link', { name: 'Book Now', disabled: false });
  }

  async openEvents() {
    await this.eventsNavLink.click();
  }

  // Tarjeta del evento con ese título exacto
  getEventCard(title) {
    return this.eventCards.filter({
      has: this.page.getByRole('heading', { name: title, exact: true }),
    });
  }

  async bookEvent(title) {
    await this.getEventCard(title).getByRole('link', { name: 'Book Now' }).click();
  }

  // Cualquier evento disponible: aquí .first() es intencional
  async bookFirstAvailableEvent() {
    await this.availableBookNowLinks.first().click();
  }
}