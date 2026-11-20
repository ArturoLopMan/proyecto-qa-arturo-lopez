import { BasePage } from './BasePage';

export class BookingDetailPage extends BasePage {
  constructor(page) {
    super(page);
    this.statusBadge = page.getByText('confirmed', { exact: true });
    this.cancelBookingButton = page.getByTestId('cancel-booking-btn');
  }

  getEventTitle(eventName) {
    return this.page.getByRole('heading', { name: eventName });
  }
  
}