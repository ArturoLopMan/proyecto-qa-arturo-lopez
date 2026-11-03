import { test, expect } from '@playwright/test';

test('inicio de sesion correcto', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  await locatorUsername.fill('minzk_rw@hotmail.com');
  await expect(locatorUsername).toHaveValue('minzk_rw@hotmail.com');
  const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  await locatorPassword.fill('QWEasd#123');
  await expect(locatorPassword).toHaveValue('QWEasd#123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Featured Events')).toBeVisible();
});

test('inicio de sesion con credenciales incorrectas', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  await locatorUsername.fill('asdasd.sssa@gmail.com');
  const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  await locatorPassword.fill('incorrectpassword');
  await page.getByRole('button', { name: 'Sign In' }).click();
  const avisos = page.locator('[aria-live="polite"]'); //seleccionado desde el outerHTML con IA.
  await expect(avisos.getByText(/invalid email or password/i)).toBeVisible();
});

test('inicio de sesion con campos vacios', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Enter a valid email')).toBeVisible();
  await expect(page.getByText('Password must be at least 6 characters')).toBeVisible();
});

test('inicio de sesion con credenciales incorrectas traza', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  await locatorUsername.fill('asdasd.sssa@gmail.com');
  const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  await locatorPassword.fill('incorrectpassword');
  await page.getByRole('button', { name: 'Sign In' }).click();
  const avisos = page.locator('[aria-live="polite"]'); //seleccionado desde el outerHTML con IA.
  await expect(avisos.getByText(/invalid email or password/i)).toBeVisible();
  // FALLA INTENCIONAL: se espera un mensaje que no existe.
  await expect(page.getByText('Login successful')).toBeVisible();
});

test('inicio de sesion con campos vacios traza', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await expect(page.getByText('Enter a valid email')).toBeVisible();
  await expect(page.getByText('Password must be at least 6 characters')).toBeVisible();
  // FALLA INTENCIONAL: se espera un mensaje que no existe.
  await expect(page.getByText('Welcome to EventHub')).toBeVisible();
});

test('inicio de sesion correcto con esperas', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  await locatorUsername.fill('minzk_rw@hotmail.com');
  await expect(locatorUsername).toHaveValue('minzk_rw@hotmail.com');
  const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  await locatorPassword.fill('QWEasd#123');
  await page.getByRole('button', { name: 'Sign In' }).click();
  const mensajePrincipal = page.getByText('Featured Events');
  // Espera explícita
  await mensajePrincipal.waitFor({ state: 'visible', timeout: 5000 });
  // Aserción con auto-waiting
  await expect(mensajePrincipal).toBeVisible();
});

test('inicio de sesion con credenciales incorrectas con esperas', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  await locatorUsername.fill('asdasd.sssa@gmail.com');
  const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  await locatorPassword.fill('incorrectpassword');
  await page.getByRole('button', { name: 'Sign In' }).click();
  const avisos = page.locator('[aria-live="polite"]');
  const mensajeError = avisos.getByText(/invalid email or password/i);
  // Espera explícita
  await mensajeError.waitFor({
    state: 'visible',
    timeout: 5000
  });
  // Assertion con auto-waiting
  await expect(mensajeError).toBeVisible();
});;

test('inicio de sesion con campos vacios con esperas', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  await page.getByRole('button', { name: 'Sign In' }).click();
  const mensajeEmail = page.getByText('Enter a valid email');
  const mensajePassword = page.getByText('Password must be at least 6 characters');
  // Esperas explícitas
  await mensajeEmail.waitFor({
    state: 'visible',
    timeout: 5000
  });
  await mensajePassword.waitFor({
    state: 'visible',
    timeout: 5000
  });
  // Assertions con auto-waiting
  await expect(mensajeEmail).toBeVisible();
  await expect(mensajePassword).toBeVisible();
});