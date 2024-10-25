import { DateValidacion,DatePasadaValidacion } from "../libreria";

describe('DateValidacion', () => {
    test('Debe validar una fecha válida', () => { 
        const validacion = new DateValidacion();
        expect(validacion.validar(new Date('2024-10-22'))).toBe(true);
        expect(validacion.validar(new Date('invalid date'))).toBe(false);
        expect(validacion.validar(new Date(NaN))).toBe(false);
    });    
});

describe('DatePasadaValidacion',()=>{
    test('Debe validar que una fecha sea pasada',()=>{
        const validacionPasada= new DatePasadaValidacion();
        expect(validacionPasada.validar(new Date('2023-10-22'))).toBe(true); //Fecha pasada
        expect(validacionPasada.validar(new Date('2025-10-22'))).toBe(false); //Fecha futura

    })
})

