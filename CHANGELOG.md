# Registro de cambios

Todos los cambios relevantes de este proyecto se documentan en este fichero.

El formato se basa en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y el proyecto sigue el [versionado semántico](https://semver.org/lang/es/).

## [Unreleased]

## [1.0.0] - 2026-11-19

### Added

- Funciones de cálculo de precios: `redondear`, `calcularSubtotal` y `aplicarDescuento`.
- Cálculo de impuestos: `calcularImpuesto` y `aplicarImpuesto`, con el IVA general (21 %) por defecto.
- Ejemplo de uso en `src/index.js` (`npm start`).
- README con descripción, requisitos, instalación y uso.
- Documentación de las funciones con JSDoc, generada en `docs/api` (`npm run docs`).
- Linter ESLint (`npm run lint`) y pruebas unitarias con `node:test` (`npm test`).
- Pipeline de integración continua con GitHub Actions: instala dependencias, pasa el linter, ejecuta las pruebas y genera la documentación como artefacto.

### Changed

- Mensaje de error de `aplicarDescuento` más claro cuando el porcentaje no está entre 0 y 100.

[Unreleased]: https://github.com/Alexuki/mi_repo/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/Alexuki/mi_repo/releases/tag/v1.0.0
-----------------------------------------------------------