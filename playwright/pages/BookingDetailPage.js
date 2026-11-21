import { BasePage } from './BasePage';
//detalle de reserva 
export class BookingDetailPage extends BasePage {
  constructor(page) {
    super(page);
    this.statusBadge = page.getByText('confirmed', { exact: true });    
  }
//detalle de titulo del evento reservado
  getEventTitle(eventName) {
    return this.page.getByRole('heading', { name: eventName });
  }  
}