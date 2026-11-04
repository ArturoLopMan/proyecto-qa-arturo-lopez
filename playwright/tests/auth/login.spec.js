import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

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
