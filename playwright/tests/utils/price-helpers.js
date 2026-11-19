// Formatea un monto como lo muestra EventHub: 2500 → "$2,500"
export function formatPrice(amount) {
  return `$${amount.toLocaleString('en-US')}`;
}