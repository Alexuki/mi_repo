/**
 * Funciones para calcular precios, subtotales, descuentos e impuestos.
 * @module precios
 */

/**
 * Redondea un número a 2 decimales.
 * @param {number} valor Número que se va a redondear.
 * @returns {number} El número redondeado a 2 decimales.
 */
export function redondear(valor) {
  return Math.round(valor * 100) / 100;
}

/**
 * Calcula el valor total de varios artículos del mismo precio.
 * @param {number} precioUnitario Precio de un artículo.
 * @param {number} cantidad Número de artículos.
 * @returns {number} El precio del conjunto de artículos.
 * @throws {RangeError} Si el precio o la cantidad son negativos.
 */
export function calcularSubtotal(precioUnitario, cantidad) {
  if (precioUnitario < 0 || cantidad < 0) {
    throw new RangeError('El precio y la cantidad no pueden ser negativos');
  }
  return redondear(precioUnitario * cantidad);
}

/**
 * Aplica un descuento a un precio.
 * @param {number} precio Precio original.
 * @param {number} porcentaje Porcentaje de descuento (0-100).
 * @returns {number} El precio con el descuento aplicado.
 * @throws {RangeError} Si el porcentaje no está entre 0 y 100.
 * @example
 * aplicarDescuento(59.97, 10); // 53.97
 */
export function aplicarDescuento(precio, porcentaje) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new RangeError('El porcentaje de descuento no puede ser menor que 0 ni mayor que 100');
  }
  return redondear(precio * (1 + porcentaje / 100));
}

/**
 * Calcula el importe de un impuesto (por ejemplo, el IVA) sobre un precio.
 * @param {number} precio Precio sin impuesto.
 * @param {number} [porcentaje=21] Porcentaje del impuesto. Por defecto, el IVA general en España (21 %).
 * @returns {number} Importe del impuesto, redondeado a 2 decimales.
 * @throws {RangeError} Si el porcentaje no está entre 0 y 100.
 */
export function calcularImpuesto(precio, porcentaje = 21) {
  if (porcentaje < 0 || porcentaje > 100) {
    throw new RangeError('El impuesto debe estar entre 0 y 100');
  }
  return redondear(precio * porcentaje / 100);
}

/**
 * Suma a un precio el impuesto correspondiente.
 * @param {number} precio Precio sin impuesto.
 * @param {number} [porcentaje=21] Porcentaje del impuesto.
 * @returns {number} Precio con el impuesto incluido, redondeado a 2 decimales.
 * @throws {RangeError} Si el porcentaje no está entre 0 y 100 (lo lanza calcularImpuesto).
 */
export function aplicarImpuesto(precio, porcentaje = 21) {
  return redondear(precio + calcularImpuesto(precio, porcentaje));
}
