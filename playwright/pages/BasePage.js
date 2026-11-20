// Comportamiento común a varias páginas de EventHub
export class BasePage {
  constructor(page) {
    this.page = page;
  }

  // Valor que aparece junto a una etiqueta (Customer, Tickets, Total, Name, Total Paid...)
  getFieldValue(label) {
    return this.page
      .getByText(label, { exact: true })
      .locator('xpath=following-sibling::*[1]');
  }
}