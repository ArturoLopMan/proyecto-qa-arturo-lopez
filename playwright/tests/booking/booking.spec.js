import { test, expect, DEFAULT_TICKETS } from "../fixture";
import { formatPrice } from "../utils/price-helpers";

test.describe("Reserva de evento (Book Now)", () => {
  test("CP-BOOK-01: reserva de un evento disponible muestra la confirmación con el total correcto", async ({
    page,
    eventsPage,
    bookingPage,
    bookingData,
    createdEvent,
  }) => {
    const totalTickets = DEFAULT_TICKETS + bookingData.extraTickets;
    const ticketPrice = createdEvent.price;
    const expectedTotal = ticketPrice * totalTickets;
    await eventsPage.openEvents();
    await eventsPage.bookEvent(createdEvent.title);
    await expect(page).toHaveURL(/\/events\/\d+/);

    // Estado inicial: 1 ticket y el precio con el que se creó el evento
    await expect(bookingPage.ticketCountLabel).toHaveText(
      String(DEFAULT_TICKETS),
    );
    await expect(bookingPage.ticketPriceLabel).toHaveText(
      formatPrice(ticketPrice),
    );

    // Sumar tickets: cambia la cantidad, el precio por ticket no
    await bookingPage.addTickets(bookingData.extraTickets);
    await expect(bookingPage.ticketCountLabel).toHaveText(String(totalTickets));
    await expect(bookingPage.ticketPriceLabel).toHaveText(
      formatPrice(ticketPrice),
    );
    await bookingPage.fillCustomerDetails(bookingData);
    await bookingPage.confirmBooking();

    // Confirmación en la misma URL
    await expect(page).toHaveURL(/\/events\/\d+/);
    await expect(bookingPage.bookingRefLabel).toBeVisible();
    await expect(bookingPage.getFieldValue("Customer")).toHaveText(
      bookingData.name,
    );
    await expect(bookingPage.getFieldValue("Tickets")).toHaveText(
      String(totalTickets),
    );
    await expect(bookingPage.getFieldValue("Total")).toHaveText(
      formatPrice(expectedTotal),
    );
  });
});
