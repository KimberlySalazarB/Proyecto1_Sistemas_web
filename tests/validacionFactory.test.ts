
import {NumberValidacionFactory,StringValidacionFactory,
    ObjectValidacionFactory,DateValidacionFactory,NombreStringValidacionFactory } from "../libreria";

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