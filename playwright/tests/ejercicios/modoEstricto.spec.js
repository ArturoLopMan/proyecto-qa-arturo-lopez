import { test, expect } from '@playwright/test';

test.use({ testIdAttribute: 'data-test' });

test('1. provocar strict mode violation', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');
  await page.getByTestId('product-name').click();  
});
test('3. solución .first', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');  
  await page.getByTestId('product-name').first().click();
  await expect(page).toHaveURL(/\/product\//);
});

test('4. solución .filter', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');
  await page.getByTestId('product-name').filter({ hasText: 'Pliers' }).first().click();
  await expect(page).toHaveURL(/\/product\//);
});