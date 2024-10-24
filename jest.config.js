export default{
    preset: 'ts-jest',               // Usa ts-jest para manejar TypeScript
    testEnvironment: 'node',         // Establece el entorno de prueba en Node.js
    testMatch: ['**/*.test.ts'],     // Patrón para buscar archivos de prueba
    verbose:true,                    // Muestra más detalles durante la ejecución de pruebas
};