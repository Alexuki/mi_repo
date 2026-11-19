import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  redondear,
  calcularSubtotal,
  aplicarDescuento,
  calcularImpuesto,
  aplicarImpuesto,
} from '../src/precios.js';

test('redondear deja 2 decimales', () => {
  assert.equal(redondear(59.973), 59.97);
  assert.equal(redondear(10), 10);
});

test('calcularSubtotal multiplica precio por cantidad', () => {
  assert.equal(calcularSubtotal(19.99, 3), 59.97);
});

test('calcularSubtotal rechaza valores negativos', () => {
  assert.throws(() => calcularSubtotal(-1, 3), RangeError);
});

test('aplicarDescuento resta el porcentaje', () => {
  assert.equal(aplicarDescuento(59.97, 10), 53.97);
});

test('aplicarDescuento rechaza porcentajes fuera de 0-100', () => {
  assert.throws(() => aplicarDescuento(100, 150), RangeError);
});

test('calcularImpuesto usa el 21 % por defecto', () => {
  assert.equal(calcularImpuesto(100), 21);
  assert.equal(calcularImpuesto(100, 10), 10);
});

test('aplicarImpuesto devuelve el precio con IVA', () => {
  assert.equal(aplicarImpuesto(53.97), 65.3);
});
