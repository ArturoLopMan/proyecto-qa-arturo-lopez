import { test, expect } from '../fixture';

test.describe('Gestión de eventos', () => {
  test('CP-EVENT-01: evento creado con datos válidos aparece en la grilla y se puede eliminar', async ({
    manageEventsPage, newEventData,
  }) => {
    await manageEventsPage.openManageEvents();
    await manageEventsPage.createEvent(newEventData);

    // El evento aparece en la grilla con sus datos
    const eventRow = manageEventsPage.getEventRow(newEventData.title);
    await expect(eventRow).toBeVisible();
    await expect(eventRow).toContainText(newEventData.category);
    await expect(eventRow).toContainText(newEventData.city);
    await expect(eventRow).toContainText(`$${newEventData.price}`);
    await expect(eventRow).toContainText(`${newEventData.totalSeats}/${newEventData.totalSeats}`);

    // Limpieza: eliminar el evento y comprobar que desaparece
    await manageEventsPage.deleteEvent(newEventData.title);
    await expect(eventRow).toHaveCount(0);
  });
});