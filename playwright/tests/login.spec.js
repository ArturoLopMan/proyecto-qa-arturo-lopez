import { test, expect } from '@playwright/test';

test('inicio de sesion', async ({ page }) => {
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