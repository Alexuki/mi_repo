# Calculadora de precios

## Descripción

Proyecto de JavaScript que contiene una librería de funciones para realizar cálculos con precios.

## Requisitos

Para poder ejecutarlo se requiere tener instalado Node.js 22 o superior, que incluye npm.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/Alexuki/mi_repo.git
   cd mi_repo
   ```

2. Instalar las dependencias:

   ```bash
   npm install
   ```

3. Ejecutar el ejemplo:

   ```bash
   npm start
   ```


## Uso

El proyecto contiene una librería de funciones para realizar cálculos con precios. Ejemplo de cómo usarla:

```js
import { calcularSubtotal, aplicarDescuento } from './src/precios.js';

const subtotal = calcularSubtotal(19.99, 3);  // 3 artículos de 19,99 €
const total = aplicarDescuento(subtotal, 10); // 10 % de descuento

console.log(`Subtotal: ${subtotal} €`);
console.log(`Total con 10 % de descuento: ${total} €`);
```

Resultado:

```
Subtotal: 59.97 €
Total con 10 % de descuento: 53.97 €
```

Funciones disponibles en `src/precios.js`:

| Función | Descripción |
|---|---|
| `redondear(valor)` | Redondea un número a 2 decimales. |
| `calcularSubtotal(precioUnitario, cantidad)` | Calcula el precio de varios artículos iguales. |
| `aplicarDescuento(precio, porcentaje)` | Aplica un porcentaje de descuento (0-100) a un precio. |

Si se pasan valores negativos o un descuento fuera de rango, las funciones lanzan un `RangeError`.
