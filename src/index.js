import { calcularSubtotal, aplicarDescuento } from './precios.js';

const subtotal = calcularSubtotal(19.99, 3);
const total = aplicarDescuento(subtotal, 10);

console.log(`Subtotal: ${subtotal} €`);
console.log(`Total con 10 % de descuento: ${total} €`);