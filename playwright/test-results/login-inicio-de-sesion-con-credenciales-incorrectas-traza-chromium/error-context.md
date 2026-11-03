# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> inicio de sesion con credenciales incorrectas traza
- Location: proyecto-qa-arturo-lopez\playwright\tests\login.spec.js:33:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Login successful')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText('Login successful') with timeout 5000ms
  - waiting for getByText('Login successful')

```

```yaml
- text: RSA Rahul Shetty Academy eventhub.app
- img "EventHub app preview"
- list:
  - listitem: ⚡ Live REST APIs — test real endpoints, not mocks
  - listitem: 🔒 Isolated sandbox — your data, your tests, no conflicts
  - listitem: 🎫 Auth, CRUD, bookings — flows you'll face on the job
  - listitem: 🤖 Built for Selenium, Playwright, RestAssured & more
- paragraph: 50,000+
- paragraph: QA engineers trained worldwide
- 'heading "The #1 QA Practice Hub for Automation Engineers" [level=2]'
- paragraph: EventHub is a production-grade practice app designed so you can sharpen your testing skills on real-world scenarios — before your next interview or project.
- link "API Documentation (Swagger)":
  - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
  - img
  - text: API Documentation (Swagger)
- img
- heading "Sign in to EventHub" [level=1]
- paragraph: Enter your credentials to continue
- text: Email
- textbox "Email":
  - /placeholder: you@email.com
  - text: asdasd.sssa@gmail.com
- text: Password
- textbox "Password":
  - /placeholder: ••••••
  - text: incorrectpassword
- button "Sign In"
- paragraph:
  - text: Don't have an account?
  - link "Register":
    - /url: /register
- paragraph:
  - text: A practice environment by
  - link "RahulShettyAcademy.com":
    - /url: https://rahulshettyacademy.com
  - text: — used by QA engineers worldwide to master automation testing.
- alert
```

# Test source

```ts
  1   | import { test, expect } from '@playwright/test';
  2   | 
  3   | test('inicio de sesion correcto', async ({ page }) => {
  4   |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  5   |   const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  6   |   await locatorUsername.fill('minzk_rw@hotmail.com');
  7   |   await expect(locatorUsername).toHaveValue('minzk_rw@hotmail.com');
  8   |   const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  9   |   await locatorPassword.fill('QWEasd#123');
  10  |   await expect(locatorPassword).toHaveValue('QWEasd#123');
  11  |   await page.getByRole('button', { name: 'Sign In' }).click();
  12  |   await expect(page.getByText('Featured Events')).toBeVisible();
  13  | });
  14  | 
  15  | test('inicio de sesion con credenciales incorrectas', async ({ page }) => {
  16  |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  17  |   const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  18  |   await locatorUsername.fill('asdasd.sssa@gmail.com');
  19  |   const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  20  |   await locatorPassword.fill('incorrectpassword');
  21  |   await page.getByRole('button', { name: 'Sign In' }).click();
  22  |   const avisos = page.locator('[aria-live="polite"]'); //seleccionado desde el outerHTML con IA.
  23  |   await expect(avisos.getByText(/invalid email or password/i)).toBeVisible();
  24  | });
  25  | 
  26  | test('inicio de sesion con campos vacios', async ({ page }) => {
  27  |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  28  |   await page.getByRole('button', { name: 'Sign In' }).click();
  29  |   await expect(page.getByText('Enter a valid email')).toBeVisible();
  30  |   await expect(page.getByText('Password must be at least 6 characters')).toBeVisible();
  31  | });
  32  | 
  33  | test('inicio de sesion con credenciales incorrectas traza', async ({ page }) => {
  34  |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  35  |   const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  36  |   await locatorUsername.fill('asdasd.sssa@gmail.com');
  37  |   const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  38  |   await locatorPassword.fill('incorrectpassword');
  39  |   await page.getByRole('button', { name: 'Sign In' }).click();
  40  |   const avisos = page.locator('[aria-live="polite"]'); //seleccionado desde el outerHTML con IA.
  41  |   await expect(avisos.getByText(/invalid email or password/i)).toBeVisible();
  42  |   // FALLA INTENCIONAL: se espera un mensaje que no existe.
> 43  |   await expect(page.getByText('Login successful')).toBeVisible();
      |                                                    ^ Error: expect(locator).toBeVisible() failed
  44  | });
  45  | 
  46  | test('inicio de sesion con campos vacios traza', async ({ page }) => {
  47  |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  48  |   await page.getByRole('button', { name: 'Sign In' }).click();
  49  |   await expect(page.getByText('Enter a valid email')).toBeVisible();
  50  |   await expect(page.getByText('Password must be at least 6 characters')).toBeVisible();
  51  |   // FALLA INTENCIONAL: se espera un mensaje que no existe.
  52  |   await expect(page.getByText('Welcome to EventHub')).toBeVisible();
  53  | });
  54  | 
  55  | test('inicio de sesion correcto con esperas', async ({ page }) => {
  56  |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  57  |   const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  58  |   await locatorUsername.fill('minzk_rw@hotmail.com');
  59  |   await expect(locatorUsername).toHaveValue('minzk_rw@hotmail.com');
  60  |   const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  61  |   await locatorPassword.fill('QWEasd#123');
  62  |   await page.getByRole('button', { name: 'Sign In' }).click();
  63  |   const mensajePrincipal = page.getByText('Featured Events');
  64  |   // Espera explícita
  65  |   await mensajePrincipal.waitFor({ state: 'visible', timeout: 5000 });
  66  |   // Aserción con auto-waiting
  67  |   await expect(mensajePrincipal).toBeVisible();
  68  | });
  69  | 
  70  | test('inicio de sesion con credenciales incorrectas con esperas', async ({ page }) => {
  71  |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  72  |   const locatorUsername = page.getByRole('textbox', { name: 'Email' });
  73  |   await locatorUsername.fill('asdasd.sssa@gmail.com');
  74  |   const locatorPassword = page.getByRole('textbox', { name: 'Password' });
  75  |   await locatorPassword.fill('incorrectpassword');
  76  |   await page.getByRole('button', { name: 'Sign In' }).click();
  77  |   const avisos = page.locator('[aria-live="polite"]');
  78  |   const mensajeError = avisos.getByText(/invalid email or password/i);
  79  |   // Espera explícita
  80  |   await mensajeError.waitFor({
  81  |     state: 'visible',
  82  |     timeout: 5000
  83  |   });
  84  |   // Assertion con auto-waiting
  85  |   await expect(mensajeError).toBeVisible();
  86  | });;
  87  | 
  88  | test('inicio de sesion con campos vacios con esperas', async ({ page }) => {
  89  |   await page.goto('https://eventhub.rahulshettyacademy.com/login');
  90  |   await page.getByRole('button', { name: 'Sign In' }).click();
  91  |   const mensajeEmail = page.getByText('Enter a valid email');
  92  |   const mensajePassword = page.getByText('Password must be at least 6 characters');
  93  |   // Esperas explícitas
  94  |   await mensajeEmail.waitFor({
  95  |     state: 'visible',
  96  |     timeout: 5000
  97  |   });
  98  |   await mensajePassword.waitFor({
  99  |     state: 'visible',
  100 |     timeout: 5000
  101 |   });
  102 |   // Assertions con auto-waiting
  103 |   await expect(mensajeEmail).toBeVisible();
  104 |   await expect(mensajePassword).toBeVisible();
  105 | });
```