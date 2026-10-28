import { test, expect } from '@playwright/test';

test('mapeo de elementos', async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/locators');
  // Your test code here
  const button = page.getByRole('button', { name: 'Add Item' });
  await expect(button).toBeVisible();
  const bytex = page.getByText('Locators'); //se usa por el texto que se ve en la pagina
  await expect(bytex).toBeVisible();
  const bylabel = page.getByLabel('Choose a country'); //se usa por su etiqueta dentro del codigo
  await expect(bylabel).toBeVisible();
  await bylabel.selectOption('Japan'); //selecciona la opcion Japan del select  
});