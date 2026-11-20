import { test, expect } from '../fixture';
import { formatPrice } from '../utils/price-helpers';
import REQUIRED_FIELD_MESSAGES from '../../test-data/required-field-messages.json';

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
    await expect(eventRow).toContainText(formatPrice(newEventData.price));
    await expect(eventRow).toContainText(`${newEventData.totalSeats}/${newEventData.totalSeats}`);

    // Limpieza: eliminar el evento y comprobar que desaparece
    await manageEventsPage.deleteEvent(newEventData.title);
    await expect(eventRow).toHaveCount(0);
  });
  test('CP-EVENT-02: cancelar la eliminación mantiene el evento en la grilla', async ({
  manageEventsPage, createdEvent,
}) => {
  await manageEventsPage.openDeleteDialog(createdEvent.title);

  // El modal advierte que se borrarán el evento y sus reservas
  await expect(manageEventsPage.deleteDialog).toBeVisible();
  await expect(manageEventsPage.deleteDialog)
    .toContainText('permanently delete the event and all associated bookings');

  await manageEventsPage.cancelDeleteButton.click();

  // El modal se cierra y el evento sigue en la grilla
  await expect(manageEventsPage.deleteDialog).toBeHidden();
  await expect(manageEventsPage.getEventRow(createdEvent.title)).toBeVisible();
});
test('CP-EVENT-03: formulario vacío muestra los mensajes de los campos obligatorios', async ({
  manageEventsPage,
}) => {
  await manageEventsPage.openManageEvents();
  await manageEventsPage.addEventButton.click();

  for (const message of REQUIRED_FIELD_MESSAGES) {
    await expect.soft(manageEventsPage.getValidationMessage(message)).toBeVisible();
  }
});
});