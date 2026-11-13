import { test, expect } from '../fixture';
import INVALID_LOGINS from '../../test-data/data-login.json';

test.describe('Inicio de sesión', () => {
  test('CP-AUTH-01: usuario válido inicia sesión y ve los eventos destacados', async ({ loginPage, credentials }) => {
    await loginPage.login(credentials.user, credentials.password);
    await expect(loginPage.featuredEventsText).toBeVisible();
  });

  for (const { id, name, user, password, error } of INVALID_LOGINS) {
    test(`${id}: ${name}`, async ({ loginPage, credentials }) => {
      await loginPage.login(user ?? credentials.user, password);
      await expect(loginPage.notificationArea).toContainText(error, { ignoreCase: true });
    });
  }

  test('CP-AUTH-03: campos vacíos muestran mensajes de validación', async ({ loginPage }) => {
    await loginPage.signInButton.click();
    await expect(loginPage.invalidEmailMessage).toBeVisible();
    await expect(loginPage.invalidPasswordMessage).toBeVisible();
  });
});