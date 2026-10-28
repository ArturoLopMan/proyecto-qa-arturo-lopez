
import { test, expect } from '@playwright/test';

test('test busqueda sin resultados', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');
  const locatorBuscar = page.getByRole('textbox', { name: 'Search' });
  await locatorBuscar.fill('fasfas');
  await expect(locatorBuscar).toHaveValue('fasfas');

  await page.getByRole('button', { name: 'Search', exact: true }).click();
  
  await expect(page.getByText('fasfas', { exact: true })).toBeVisible();
  await expect(page.getByText('There are no products found.')).toBeVisible();  
  await expect(page.getByRole('heading', { level: 5 })).toHaveCount(0);
});

test('test busqueda sin resultados con esperas', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com');

  const locatorBuscar = page.getByRole('textbox', { name: 'Search' });
  const resultadoBusqueda = page.getByText('fasfas', { exact: true });
  const mensajeSinResultados = page.getByText(
    'There are no products found.',
    { exact: true }
  );

  await locatorBuscar.fill('fasfas');
  await expect(locatorBuscar).toHaveValue('fasfas');

  await page.getByRole('button', { name: 'Search', exact: true }).click();

  // 1. Espera implícita:
  // Playwright reintenta la aserción hasta que el texto sea visible
  // o se agote el tiempo de espera configurado.
  await expect(resultadoBusqueda).toBeVisible();

  // 2. Espera fija: pausa de 1 segundo.  
  await page.waitForTimeout(1000);

  // 3. Espera explícita: espera hasta que aparezca el mensaje.
  await mensajeSinResultados.waitFor({
    state: 'visible',
    timeout: 5000
  });

  // Validaciones finales
  await expect(mensajeSinResultados).toBeVisible();
  await expect(page.getByRole('heading', { level: 5 })).toHaveCount(0);
});

