import { ObjectValidacion } from "../libreria";

describe('ObjectValidacion', () => {
    test('Debe validar un objeto válido', () => { 
        const validacion = new ObjectValidacion();
        expect(validacion.validar({ key: "value" })).toBe(true);
        expect(validacion.validar([])).toBe(true); // Las listas también son objetos
    });
});