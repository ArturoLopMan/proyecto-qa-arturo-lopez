export class ManageEventsPage {
  constructor(page) {
    this.page = page;

    // Formulario de creación
    this.titleInput = page.getByTestId("event-title-input");
    this.descriptionInput = page.getByPlaceholder("Describe the event…");
    this.categorySelect = page.getByLabel("Category");
    this.cityInput = page.getByRole("textbox", { name: "City" });
    this.venueInput = page.getByRole("textbox", { name: "Venue" });
    this.dateTimeInput = page.getByLabel("Event Date & Time");
    this.priceInput = page.getByRole("spinbutton", { name: "Price" });
    this.totalSeatsInput = page.getByRole("spinbutton", {
      name: "Total Seats",
    });
    this.addEventButton = page.getByTestId("add-event-btn");

    // grilla
    this.eventRows = page.getByTestId("event-table-row");

    // Modal de eliminación
    this.deleteDialog = page.getByRole("dialog", {
      name: "Delete this event?",
    });
    this.confirmDeleteButton =
      this.deleteDialog.getByTestId("confirm-dialog-yes");
    this.cancelDeleteButton = this.deleteDialog.getByRole("button", {
      name: "Cancel",
      exact: true,
    });
  }
  //abre la vista
  async openManageEvents() {
    await this.page.goto("/admin/events");
  }
  //llena formulario y crea evento
  async createEvent({
    title,
    description,
    category,
    city,
    venue,
    dateTime,
    price,
    totalSeats,
  }) {
    await this.titleInput.fill(title);
    await this.descriptionInput.fill(description);
    await this.categorySelect.selectOption(category);
    await this.cityInput.fill(city);
    await this.venueInput.fill(venue);
    await this.dateTimeInput.fill(dateTime);
    await this.priceInput.fill(String(price));
    await this.totalSeatsInput.fill(String(totalSeats));
    await this.addEventButton.click();
  }

  // Fila de la grilla con ese título exacto
  getEventRow(title) {
    return this.eventRows.filter({
      has: this.page.getByText(title, { exact: true }),
    });
  }

  // Abre el modal de eliminación sin confirmar
  async openDeleteDialog(title) {
    await this.getEventRow(title).getByTestId("delete-event-btn").click();
  }
  //elimina el evento confirmado en modal
  async deleteEvent(title) {
    await this.openDeleteDialog(title);
    await this.confirmDeleteButton.click();
  }
  // Limpieza: elimina el evento solo si existe (por si el test falló antes de crearlo)
  async deleteEventIfExists(title) {
    await this.openManageEvents();
    const eventRow = this.getEventRow(title);
    try {
      await eventRow.waitFor({ state: "visible", timeout: 5000 });
    } catch {
      return; // el evento no llegó a crearse
    }
    await this.deleteEvent(title);
    await eventRow.waitFor({ state: "detached" });
  }
  // Mensaje de validación que aparece en rojo
  getValidationMessage(message) {
    return this.page.getByText(message, { exact: true });
  }
}
