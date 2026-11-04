import { test, expect } from '../fixture';
import { LoginPage } from '../../pages/LoginPage';
import { test as base } from '../fixture';

/* Test refactorizacion POM usando describe y beforeEach
test.describe('InicioSesion', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.abrirLogin();
  });

  test('inicio de sesion correcto', async () => {
    await loginPage.iniciarSesion(process.env.LOGIN_USER, process.env.LOGIN_PASSWORD);
    await expect(loginPage.messageFeaturedEvents).toBeVisible();
  });

  test('inicio de sesion con credenciales incorrectas', async () => {
    await loginPage.iniciarSesion('correo@gmail.com', 'incorrectpassword');
    await expect(loginPage.messageInvalidCredentials).toBeVisible();
  });

  test('inicio de sesion con campos vacios', async () => {
    await loginPage.buttonSignIn.click();
    await expect(loginPage.messageInvalidEmail).toBeVisible();
    await expect(loginPage.messageInvalidPassword).toBeVisible();
  });
});
*/

test.describe('InicioSesion', () => {
  test('inicio de sesion correcto', async ({ loginPage, credentials }) => {
    await loginPage.iniciarSesion(credentials.user, credentials.password);
    await expect(loginPage.messageFeaturedEvents).toBeVisible();
  });

  test('inicio de sesion con credenciales incorrectas', async ({ loginPage }) => {
    await loginPage.iniciarSesion('correo@gmail.com', 'incorrectpassword');
    await expect(loginPage.messageInvalidCredentials).toBeVisible();
  });

  test('inicio de sesion con campos vacios', async ({ loginPage }) => {
    await loginPage.buttonSignIn.click();
    await expect(loginPage.messageInvalidEmail).toBeVisible();
    await expect(loginPage.messageInvalidPassword).toBeVisible();
  });
});