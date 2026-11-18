// Funciones para calcular precios, subtotales y aplicar descuentos

/**
 * Redondea el valor pasado a 2 decimales.
 * @param {*} valor Número recibido.
 * @returns Un número redondeado a 2 decimales.
 */
export function redondear(valor) {
  return Math.round(valor * 100) / 100;
}

/**
 * Calcula el valor total de varios artículos del mismo precio.
 * @param {*} precioUnitario Precio de un artículo.
 * @param {*} cantidad Número de artículos.
 * @returns El precio del conjunto de artículos.
 */
export function calcularSubtotal(precioUnitario, cantidad) {
  if (precioUnitario < 0 || cantidad < 0) {
    throw new RangeError('El precio y la cantidad no pueden ser negativos');
  }
  return redondear(precioUnitario * cantidad);
}

/**
 * Aplica un descuento a un precio.
 * @param {*} precio Precio original.
 * @param {*} porcentaje % de descuento a aplicar al precio original.
 * @returns El precio final resultado de reducir al precio original el porcentaje de descuento.
 */
export function aplicarDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100');
  }
  return redondear(precio * (1 - porcentaje / 100));
}

/**
 * Calcula el importe de un impuesto (por ejemplo, el IVA) sobre un precio.
 * @param {number} precio Precio sin impuesto.
 * @param {number} [porcentaje=21] Porcentaje del impuesto. Por defecto, el IVA general en España (21 %).
 * @returns {number} Importe del impuesto, redondeado a 2 decimales.
 */
export function calcularImpuesto(precio, porcentaje = 21) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new RangeError('El impuesto debe estar entre 0 y 100');
  }
  return redondear(precio * porcentaje / 100);
}
