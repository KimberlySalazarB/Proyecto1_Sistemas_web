# Proyecto1: Desarrollo de una librería de validación de datos en TypeScript


## Descripción

Esta librería modular y reusable permite la validación de datos de entrada en aplicaciones. Soporta diferentes tipos de validaciones como números, cadenas, fechas y objetos, aplicando principios de diseño (SOLID), sólidos para garantizar su eficacia y facilidad de uso y patrones de diseño como Strategy y Factory.

## Requisitos

- Aplicar principios SOLID y patrones de diseño como Strategy y Factory.
- Utilizar genéricos y utilitarios de tipo en TypeScript para tipar las validaciones.
- Documentar el código utilizando estándares como JSDoc o TypeDoc.
- Implementar pruebas unitarias exhaustivas con Jest siguiendo TDD.
- Gestionar el proyecto utilizando Git y seguir prácticas de branching.

## Estructura del Proyecto

```
projecto1_sistemas_web/
|
│── dist/
├── libreria/
│   ├── validacion/
│   │   ├── numberValidacion.ts
│   │   ├── stringValiddacion.ts
│   │   |── dateValidacion.ts
│   │   └── objectValidacion.ts
│   ├── strategy/
│   │   |── validacionFactory.ts
|   |   └── validacionStrategy.ts
│   |── index.ts
│   
│
├── tests/
│   ├── numberValidacion.test.ts
│   ├── stringValidacion.test.ts
│   └── dateValidacion.test.ts
│   └── objectValidacion.test.ts
│   └── validacionFactory.test.ts
│   └── validacionStrategy.test.ts
│
├── package.json
├── package-lock.json
├── jest.config.js
├── jest.config.ts
├── tsconfig.json
└── README.md

```

Para ejecutar las pruebas unitarias  implementadas con Jest.

1.-Asegúrate de que las dependencias estén instaladas.
2.-Ejecuta el comando:

```
npm test
```

