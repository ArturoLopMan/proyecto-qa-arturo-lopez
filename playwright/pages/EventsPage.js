export class EventsPage {
  //lista de eventos vista /events
  constructor(page) {
    this.page = page;
    this.eventsNavLink = page.getByTestId('nav-events');
    this.eventCards = page.getByTestId('event-card');
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
  //click en book now del evento con ese titulo exacto
  async bookEvent(title) {
    await this.getEventCard(title).getByRole('link', { name: 'Book Now' }).click();
  }
}