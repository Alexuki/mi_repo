import { calcularSubtotal, aplicarDescuento, calcularImpuesto, aplicarImpuesto } from './precios.js';

const subtotal = calcularSubtotal(19.99, 3);         // 3 artículos de 19,99 €
const conDescuento = aplicarDescuento(subtotal, 10); // 10 % de descuento
const iva = calcularImpuesto(conDescuento);          // IVA del 21 % por defecto
const total = aplicarImpuesto(conDescuento);

console.log(`Subtotal: ${subtotal.toFixed(2)} €`);
console.log(`Con 10 % de descuento: ${conDescuento.toFixed(2)} €`);
console.log(`IVA (21 %): ${iva.toFixed(2)} €`);
console.log(`Total con IVA: ${total.toFixed(2)} €`);
