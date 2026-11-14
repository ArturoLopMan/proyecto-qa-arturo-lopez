# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth\login.spec.js >> Inicio de sesión >> CP-AUTH-04: usuario válido con contraseña incorrecta muestra mensaje de error
- Location: playwright\tests\auth\login.spec.js:11:9

# Error details

```
Error: Faltan variables de entorno en el archivo .env: LOGIN_PASSWORD
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - generic [ref=e5]:
          - generic [ref=e6]: RSA
          - generic [ref=e7]: Rahul Shetty Academy
        - generic [ref=e8]:
          - generic [ref=e9]: eventhub.app
          - img "EventHub app preview" [ref=e14]
        - list [ref=e16]:
          - listitem [ref=e17]:
            - generic [ref=e18]: ⚡
            - generic [ref=e19]: Live REST APIs — test real endpoints, not mocks
          - listitem [ref=e20]:
            - generic [ref=e21]: 🔒
            - generic [ref=e22]: Isolated sandbox — your data, your tests, no conflicts
          - listitem [ref=e23]:
            - generic [ref=e24]: 🎫
            - generic [ref=e25]: Auth, CRUD, bookings — flows you'll face on the job
          - listitem [ref=e26]:
            - generic [ref=e27]: 🤖
            - generic [ref=e28]: Built for Selenium, Playwright, RestAssured & more
      - generic [ref=e30]:
        - paragraph [ref=e31]: 50,000+
        - paragraph [ref=e32]: QA engineers trained worldwide
    - generic [ref=e34]:
      - generic [ref=e35]:
        - 'heading "The #1 QA Practice Hub for Automation Engineers" [level=2] [ref=e36]': "The #1 QA Practice Hubfor Automation Engineers"
        - paragraph [ref=e37]: EventHub is a production-grade practice app designed so you can sharpen your testing skills on real-world scenarios — before your next interview or project.
      - link "API Documentation (Swagger)" [ref=e38] [cursor=pointer]:
        - /url: https://api.eventhub.rahulshettyacademy.com/api/docs
      - generic [ref=e41]:
        - generic [ref=e42]:
          - heading "Sign in to EventHub" [level=1] [ref=e46]
          - paragraph [ref=e47]: Enter your credentials to continue
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Email
            - textbox "Email" [ref=e51]:
              - /placeholder: you@email.com
          - generic [ref=e52]:
            - generic [ref=e53]: Password
            - textbox "Password" [ref=e54]:
              - /placeholder: ••••••
          - button "Sign In" [ref=e55] [cursor=pointer]
        - paragraph [ref=e56]:
          - text: Don't have an account?
          - link "Register" [ref=e57] [cursor=pointer]:
            - /url: /register
      - paragraph [ref=e58]:
        - text: A practice environment by
        - link "RahulShettyAcademy.com" [ref=e59] [cursor=pointer]:
          - /url: https://rahulshettyacademy.com
        - text: — used by QA engineers worldwide to master automation testing.
  - alert [ref=e60]
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { EventsPage } from '../pages/EventsPage';
  4  | import { BookingPage } from '../pages/BookingPage';
  5  | import { MyBookingsPage } from '../pages/MyBookingsPage';
  6  | import { BookingDetailPage } from '../pages/BookingDetailPage';
  7  | 
  8  | // El formulario de reserva arranca con 1 ticket
  9  | export const DEFAULT_TICKETS = 1;
  10 | const REQUIRED_ENV_VARS = ['LOGIN_USER', 'LOGIN_PASSWORD'];
  11 | 
  12 | export const test = base.extend({
  13 |   // Credenciales desde .env, con validación temprana
  14 |   credentials: async ({}, use) => {
  15 |     const missingVars = REQUIRED_ENV_VARS.filter((name) => !process.env[name]?.trim());
  16 |     if (missingVars.length > 0) {
> 17 |       throw new Error(`Faltan variables de entorno en el archivo .env: ${missingVars.join(', ')}`);
     |             ^ Error: Faltan variables de entorno en el archivo .env: LOGIN_PASSWORD
  18 |     }
  19 |     await use({
  20 |       user: process.env.LOGIN_USER,
  21 |       password: process.env.LOGIN_PASSWORD,
  22 |     });
  23 |   },
  24 | 
  25 |   // Página de login abierta
  26 |   loginPage: async ({ page }, use) => {
  27 |     const loginPage = new LoginPage(page);
  28 |     await loginPage.openLogin();
  29 |     await use(loginPage);
  30 |   },
  31 | 
  32 |   // Sesión iniciada: reutiliza loginPage y credentials
  33 |   authenticatedPage: async ({ page, loginPage, credentials }, use) => {
  34 |     await loginPage.login(credentials.user, credentials.password);
  35 |     await expect(loginPage.featuredEventsText).toBeVisible();
  36 |     await use(page);
  37 |   },
  38 | 
  39 |   eventsPage: async ({ authenticatedPage }, use) => {
  40 |     await use(new EventsPage(authenticatedPage));
  41 |   },
  42 | 
  43 |   bookingPage: async ({ authenticatedPage }, use) => {
  44 |     await use(new BookingPage(authenticatedPage));
  45 |   },
  46 | 
  47 |   myBookingsPage: async ({ authenticatedPage }, use) => {
  48 |     await use(new MyBookingsPage(authenticatedPage));
  49 |   },
  50 | 
  51 |   bookingDetailPage: async ({ authenticatedPage }, use) => {
  52 |     await use(new BookingDetailPage(authenticatedPage));
  53 |   },
  54 | 
  55 |   // Datos de la reserva (se pueden sobrescribir en un test)
  56 |   bookingData: async ({}, use) => {
  57 |     await use({
  58 |       name: 'Arturo Lopez',
  59 |       email: 'arturoqa@gmail.com',
  60 |       phone: '+51 999888111',
  61 |       extraTickets: 1,
  62 |     });
  63 |   },
  64 | 
  65 |   // Precondición: deja una reserva hecha y entrega sus datos
  66 |   createdBooking: async ({ eventsPage, bookingPage, bookingData }, use) => {
  67 |     await eventsPage.bookFirstAvailableEvent();
  68 |     await expect(bookingPage.ticketPriceLabel).toHaveText(/\$\d+/);
  69 |     const ticketPrice = await bookingPage.getTicketPrice();
  70 | 
  71 |     await bookingPage.addTickets(bookingData.extraTickets);
  72 |     await bookingPage.fillCustomerDetails(bookingData);
  73 |     await bookingPage.confirmBooking();
  74 | 
  75 |     await expect(bookingPage.bookingRefLabel).toBeVisible();
  76 |     const bookingRef = (await bookingPage.bookingRefLabel.textContent()).trim();
  77 |     const tickets = DEFAULT_TICKETS + bookingData.extraTickets;
  78 | 
  79 |     await use({ ...bookingData, bookingRef, tickets, ticketPrice, total: ticketPrice * tickets });
  80 |   },
  81 | });
  82 | 
  83 | export { expect };
```