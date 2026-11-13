import { test, expect } from '../fixture';

const INVALID_LOGINS = [
  {
    id: 'CP-AUTH-02',
    name: 'credenciales inválidas muestran mensaje de error',
    user: 'correo@gmail.com',
    password: 'incorrectpassword',
    error: 'Invalid email or password',
  },
  {
    id: 'CP-AUTH-04',
    name: 'usuario válido con contraseña incorrecta muestra mensaje de error',
    password: 'incorrectpassword',
    error: 'Invalid email or password',
  },
];

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