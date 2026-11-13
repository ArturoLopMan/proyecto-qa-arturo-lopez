# Proyecto QA – EventHub

Proyecto académico del curso de **QA Automatizador**. Contiene el análisis, la documentación de pruebas y la automatización con **Playwright y JavaScript** de [EventHub](https://eventhub.rahulshettyacademy.com/), una plataforma de gestión y reserva de eventos creada para practicar testing. Su documentación de API está en <https://api.eventhub.rahulshettyacademy.com/api/docs/>.

**Autor:** Arturo López Manrique

## Alcance

Flujos críticos cubiertos por las pruebas:

| Flujo | Qué se prueba |
|---|---|
| M01 Registro y creación de usuario | Validación de campos y acceso |
| M02 Búsqueda de eventos | Listado, filtros y detalle |
| M03 Creación de evento | Formulario, fecha y límite de 6 eventos |
| M04 Reserva de tickets | Reserva de un evento disponible («Book Now») |
| M05 Consulta de reservas | Historial y detalle de una reserva |
| Accesibilidad | Contraste, encabezados y enlaces (Lighthouse) |

Fuera de alcance: rendimiento y seguridad.

## Estructura del repositorio

```
proyecto-qa-arturo-lopez/
├── docs/            Documentación de QA
├── evidencias/      Capturas y evidencias
├── playwright/      Automatización (ver abajo)
│   ├── pages/       Page Objects
│   ├── tests/       Pruebas y fixtures
│   ├── .env.example Plantilla de variables de entorno
│   └── playwright.config.js
└── README.md
```

### Documentación de QA

- Documento de casos de prueba manuales (30 casos en 5 flujos)
- Plan de pruebas
- Matriz de trazabilidad (17 requisitos)
- Reporte de defectos (8 hallazgos)

### Automatización (`playwright/`)

| Carpeta o archivo | Contenido |
|---|---|
| `pages/LoginPage.js` | Login: campos, botón y mensajes de validación |
| `pages/EventsPage.js` | Lista de eventos y botón «Book Now» |
| `pages/BookingPage.js` | Formulario de reserva y confirmación |
| `pages/MyBookingsPage.js` | Tarjetas de «Mis reservas» |
| `pages/BookingDetailPage.js` | Detalle de una reserva |
| `tests/fixture.js` | Fixtures compartidos |
| `tests/auth/login.spec.js` | Login correcto, credenciales incorrectas y campos vacíos |
| `tests/booking/booking.spec.js` | Reserva de un evento disponible y su confirmación |
| `tests/booking/my-bookings.spec.js` | Detalle de una reserva recién creada |
| `tests/ejercicios/` | Ejercicios de práctica sobre Toolshop (no son parte de EventHub) |

## Flujos cubiertos por la automatización

| Flujo | Archivo | Pruebas |
|---|---|---|
| Inicio de sesión | `tests/auth/login.spec.js` | 3 |
| Reserva de un evento («Book Now») | `tests/booking/booking.spec.js` | 1 |
| Mis reservas y detalle de reserva | `tests/booking/my-bookings.spec.js` | 1 |

### Inicio de sesión

| Prueba | Qué verifica |
|---|---|
| CP-AUTH-01: usuario válido inicia sesión y ve los eventos destacados | Con un usuario válido se muestra la sección «Featured Events» |
| CP-AUTH-02: credenciales inválidas muestran mensaje de error | Aparece el aviso de email o contraseña inválidos en el contenedor de avisos |
| CP-AUTH-03: campos vacíos muestran mensajes de validación | Se muestran «Enter a valid email» y «Password must be at least 6 characters» |

### Reserva de un evento («Book Now»)

Prueba: **CP-BOOK-01: reserva de un evento disponible muestra la confirmación con el total correcto**. Caso manual relacionado: TC-M04-01. Requisito de la matriz: R14.

1. Inicia sesión de forma automática con el fixture `authenticatedPage`.
2. Abre el primer evento disponible, es decir, con el enlace «Book Now» habilitado, y comprueba la URL `/events/{id}`.
3. Verifica el estado inicial: 1 ticket y el precio de un ticket.
4. Suma 1 ticket (quedan 2) y comprueba que el precio por ticket no cambia.
5. Completa Full name, Email y Phone, y pulsa «Confirm Booking».
6. En la confirmación, que mantiene la misma URL, verifica la referencia de la reserva, el cliente, los tickets y que el total sea precio × cantidad.

### Mis reservas y detalle de reserva

Prueba: **CP-BOOK-02: el detalle de una reserva creada muestra sus datos**. Requisito de la matriz: R16.

1. El fixture `createdBooking` deja una reserva hecha y entrega su referencia, así que la prueba no depende de reservas previas.
2. Pulsa «View My Bookings» y comprueba la URL `/bookings`.
3. Localiza la tarjeta de **esa** reserva por su referencia y verifica sus tickets y su total.
4. Abre «View Details» y comprueba la URL `/bookings/{id}`.
5. En el detalle verifica el estado «confirmed», el nombre del evento, los datos del cliente (nombre, email y teléfono), el resumen de pago (tickets, precio por ticket y total pagado) y el ID de la reserva.

### Cómo se encadenan los fixtures

```
credentials → loginPage → authenticatedPage → eventsPage
                                            → bookingPage
                                            → myBookingsPage
                                            → bookingDetailPage
bookingData + eventsPage + bookingPage → createdBooking
```

Cada prueba pide solo lo que necesita y Playwright prepara el resto en orden.

### Ejercicios de práctica

En `tests/ejercicios/` hay ejercicios sobre otra aplicación, Toolshop (practicesoftwaretesting.com), que no forman parte de EventHub:

- Modo estricto (strict mode) de los localizadores.
- Búsqueda sin resultados: se comprueba el mensaje de que no hay productos y que la lista queda vacía.

### Pendiente de automatizar

- Registro de usuario (M01) y búsqueda de eventos (M02).
- Creación de evento (M03), incluida la validación de fecha y el límite de 6 eventos.
- Cancelación de una reserva y reservas con datos incompletos (M04).
- Accesibilidad manual.

## Buenas prácticas aplicadas

- **Page Object Model:** un Page Object por pantalla, con localizadores y acciones separados de las pruebas.
- **Fixtures** (`tests/fixture.js`):
  - `credentials`: usuario y contraseña desde `.env`, con validación temprana.
  - `loginPage` y `authenticatedPage`: login abierto y sesión iniciada.
  - `eventsPage`, `bookingPage`, `myBookingsPage` y `bookingDetailPage`: Page Objects listos para usar.
  - `bookingData` y `createdBooking`: datos de prueba y precondición que deja una reserva hecha y entrega sus datos.
  - `DEFAULT_TICKETS`: constante compartida con la cantidad inicial de tickets del formulario.
- **`describe` y aserciones con reintento** de Playwright, sin `waitForTimeout` ni `expect(await ...)`.
- **Orden de localizadores:** `getByRole`, `getByLabel`, `getByPlaceholder`, `getByText` y `getByTestId`.
- **Datos fuera del código:** las credenciales viven en `.env`, que no se versiona.

### Convención de nombres

| Elemento | Regla | Ejemplo del proyecto |
|---|---|---|
| Test | Español, con ID y resultado | `CP-AUTH-02: credenciales inválidas muestran mensaje de error` |
| Archivo de test | Inglés, minúsculas, `.spec.js` | `my-bookings.spec.js` |
| Clase y archivo | Inglés, PascalCase | `BookingPage.js` |
| Método | Inglés, verbo + objeto, camelCase | `fillCustomerDetails()` |
| Variable | Inglés, camelCase, descriptiva | `confirmBookingButton` |
| Constante | Inglés, MAYÚSCULAS | `DEFAULT_TICKETS` |

Prefijos de ID: `CP-AUTH` para inicio de sesión y `CP-BOOK` para reservas.

## Cómo ejecutar

### Requisitos

- Node.js (versión LTS reciente)
- Una cuenta de prueba en EventHub

### Instalación

```bash
cd playwright
npm install
npx playwright install
```

### Configuración

Copia la plantilla y completa tus datos:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `BASE_URL` | `https://eventhub.rahulshettyacademy.com` |
| `LOGIN_USER` | Email de tu cuenta de prueba |
| `LOGIN_PASSWORD` | Contraseña de tu cuenta de prueba |

No subas el archivo `.env` al repositorio.

### Comandos

Ejecútalos siempre desde la carpeta `playwright`, donde está `playwright.config.js`; si no, no se cargan `baseURL` ni `.env`.

```bash
npx playwright test                        # todos los tests
npx playwright test tests/auth             # solo login
npx playwright test tests/booking          # reserva y mis reservas
npx playwright test my-bookings --headed   # un archivo, viendo el navegador
npx playwright test my-bookings --debug    # paso a paso con el Inspector
npx playwright show-report                 # abrir el reporte HTML
```

## Hallazgos principales

| ID | Hallazgo | Estado |
|---|---|---|
| BUG-01 | Se acepta un teléfono con más de 10 dígitos | En revisión |
| BUG-02 | Se acepta un guion al inicio del teléfono | En revisión |
| BUG-03 | Se aceptan guiones consecutivos en el teléfono | En revisión |
| DEF-01 | El formulario de evento no responde con el año 3035 | Nuevo |
| DEF-02 | El botón «Editar» no tiene aspecto de botón | Nuevo |
| Hallazgos 01 a 03 | Contraste, encabezados y enlaces idénticos (Lighthouse) | Por confirmar |

El detalle de cada uno está en el reporte de defectos.

## Notas

- Las pruebas corren contra un **sitio público de práctica**. Cada reserva que se crea consume asientos del espacio del usuario de prueba.
- El sitio puede cambiar sin aviso y volver inestables algunos localizadores.
- Los reportes (`playwright-report/`) y los resultados (`test-results/`) se generan en cada ejecución y no se versionan.

## Estado del proyecto

En progreso. Pendiente: cancelación de reservas, pruebas de creación de evento y ampliación de los casos con huecos de cobertura (precio y asientos, límite de 6 eventos, edición y eliminación de eventos y accesibilidad manual).