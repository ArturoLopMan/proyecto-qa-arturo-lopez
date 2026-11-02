import { test, expect } from '@playwright/test';

test('inicio de sesion correcto', async ({ page }) => {
  await page.goto('https://eventhub.rahulshettyacademy.com/login');
  const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  await locatorUsername.fill('sovietic.coach.2024@gmail.com');
  await expect(locatorUsername).toHaveValue('sovietic.coach.2024@gmail.com');
  const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  await locatorPassword.fill('VZM203q2*');
  await expect(locatorPassword).toHaveValue('VZM203q2*');
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
