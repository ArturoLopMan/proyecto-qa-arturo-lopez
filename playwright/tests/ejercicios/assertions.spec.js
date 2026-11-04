import { test, expect } from '@playwright/test';

test('uso de assertions', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');

  const locatorUsername = page.getByRole('textbox', { name: 'Username' });
  await locatorUsername.fill('student');
   await expect(locatorUsername).toHaveValue('student');
   await page.getByRole('button', { name: 'Submit' }).click();
   const locatorError = page.locator('#error');
   await expect(locatorError).not.toHaveText('Invalid credentials');

  const locatorList = page.getByRole('heading', { name: 'Test login' });
   await expect(locatorList).toHaveText('Test login');
   await expect(locatorList).toContainText('login');

  //Valida que la pagina tenga el titulo correcto (basta que contenga una parte del titulo)
  await expect(page).toHaveTitle(/Test Login/);
  //Nos ayuda a contabilizar la cantidad de elementos que hay en la pagina, en este caso un textbox
  const locatorTextbox = page.getByRole('textbox');
   await expect(locatorTextbox).toHaveCount(2);

   //Valida que el boton de submit este deshabilitado o habilitado
   await expect(page.getByRole('button', { name: 'Submit' })).toBeEnabled(); // toBeDisabled()

});