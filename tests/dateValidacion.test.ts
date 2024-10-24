import { DateValidacion } from "../libreria";

describe('DateValidacion', () => {
    test('Debe validar una fecha válida', () => { 
        const validacion = new DateValidacion();
        expect(validacion.validar(new Date('2024-10-22'))).toBe(true);
        expect(validacion.validar(new Date('invalid date'))).toBe(false);
        expect(validacion.validar(new Date(NaN))).toBe(false);
    });
    
});