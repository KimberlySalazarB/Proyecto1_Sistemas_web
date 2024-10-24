
import {NumberValidacionFactory,PositivoNumberValidacionFactory,ParNumberValidacionFactory,ImparNumberValidacionFactory,StringValidacionFactory,
    ObjectValidacionFactory,DateValidacionFactory,NombreStringValidacionFactory,MayorQueNumberValidacionFactory } from "../libreria";

// Descripción del bloque de pruebas
describe('NumberValidacionFactory', () => {

    test('Debe validar un numero valido',()=>{
        const numeroFactory=new NumberValidacionFactory();
        const esNumero= numeroFactory.realizarValidacion(10);
        expect(esNumero).toBe(true);
    })

    test('Debe fallar al validar un numero no valido',()=>{
        const nonumeroFactory=new NumberValidacionFactory();
        const noesNumero= nonumeroFactory.realizarValidacion(NaN);
        expect(noesNumero).toBe(false);
    })

    // Prueba para validar números positivos
    test('debe validar correctamente un número positivo', () => {
        // Crear una instancia de la factory
        const positivoFactory = new PositivoNumberValidacionFactory();
        const esPositivo = positivoFactory.realizarValidacion(10);
        expect(esPositivo).toBe(true);
    });

    // Prueba para validar un número negativo 
    test('debe fallar al validar un número negativo', () => {
        // Crear una instancia de la factory
        const positivoFactory = new PositivoNumberValidacionFactory();
        // Ejecutar la validación con un número negativo
        const esPositivo = positivoFactory.realizarValidacion(-5);
        // Afirmar que la validación devuelve false
        expect(esPositivo).toBe(false);
    });

    // Prueba para validar el cero (debería fallar la validación)
    test('debe fallar al validar el número cero', () => {
        // Crear una instancia de la factory
        const positivoFactory = new PositivoNumberValidacionFactory();
        // Ejecutar la validación con el número 0
        const esPositivo = positivoFactory.realizarValidacion(0);
        // Afirmar que la validación devuelve false
        expect(esPositivo).toBe(false);
    });

    //validación de números pares
    test('Debe validar un número par', () => {
        const pPar= new ParNumberValidacionFactory();
        const esPar=pPar.realizarValidacion(2);
        const noesPar=pPar.realizarValidacion(3);
        expect(esPar).toBe(true);
        expect(noesPar).toBe(false);
    });

    //validación de números impares
    test('Debe validar un número impar', () => {
        const Impar = new ImparNumberValidacionFactory();
        const esImparPar=Impar.realizarValidacion(3);
        const noesImparPar=Impar.realizarValidacion(2);
        expect(esImparPar).toBe(true);
        expect(noesImparPar).toBe(false);
    });
    
    //validación de números mayores a un valor dado
    test('Debe validar un número mayor que un valor dado', () => {
        const validacion = new MayorQueNumberValidacionFactory(10);
        const esMayor=validacion.realizarValidacion(20);
        const esMenor=validacion.realizarValidacion(3);
        expect(esMayor).toBe(true);
        expect(esMenor).toBe(false);
    });
});


describe('DateValidacionFactory', () => {
    test('Debe validar una fecha válida', () => { 
        const date= new DateValidacionFactory();
        const fecha=date.realizarValidacion(new Date('2024-10-22'));
        const nofecha=date.realizarValidacion(new Date('fecha invalida'));
        const nanfecha=date.realizarValidacion(new Date(NaN));
        expect(fecha).toBe(true);
        expect(nofecha).toBe(false);
        expect(nanfecha).toBe(false);
    });
    
});

describe('ObjectValidacionFactory', () => {
    test('Debe validar un objeto válido', () => { 
        const obj= new ObjectValidacionFactory();
        const objectook=obj.realizarValidacion({ key: "value" });
        const objectarray=obj.realizarValidacion([]);

        expect(objectook).toBe(true);
        expect(objectarray).toBe(true); // Las listas también son objetos
    });
});

describe('StringValidacionFactory',()=>{
    test('Debe validar una cadena no vacia',()=>{
        const cadena=new StringValidacionFactory();
        const esCadena=cadena.realizarValidacion("hello");
        const noesCadena=cadena.realizarValidacion('');

        expect(esCadena).toBe(true);
        expect(noesCadena).toBe(false);
    });

    test('Debe validar una cadena de nombre',()=>{
        const cadenanombre=new NombreStringValidacionFactory;
        const esNombre=cadenanombre.realizarValidacion("Lupita");
        const noesCadenaNombre=cadenanombre.realizarValidacion('');
        const noesCadenaNombre2=cadenanombre.realizarValidacion('1L');
        const noesCadenaNombre3=cadenanombre.realizarValidacion('1L34H');

        expect(esNombre).toBe(true);
        expect(noesCadenaNombre).toBe(false);
        expect(noesCadenaNombre2).toBe(false);
        expect(noesCadenaNombre3).toBe(false);
    });
})