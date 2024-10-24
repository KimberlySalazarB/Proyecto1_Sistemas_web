export default {
    preset: 'ts-jest',
    testEnvironment: 'node',  
    testMatch: ['**/tests/**/*.test.ts'],  // Define dónde buscar archivos de pruebas
    moduleFileExtensions: ['ts', 'js'],  // Extensiones de archivos permitidos
    collectCoverage: true,               // Activar el reporte de cobertura de pruebas
    coverageDirectory: 'coverage',       // Carpeta donde se guardará el reporte de cobertura
    verbose: true,                       // Muestra más detalles durante la ejecución de pruebas
  };