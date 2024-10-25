import { ObjectValidacion,ObjectCamposValidacion } from "../libreria";

describe('ObjectValidacion', () => {
    test('Debe validar un objeto válido', () => { 
        const validacion = new ObjectValidacion();
        expect(validacion.validar({ key: "value" })).toBe(true);
        expect(validacion.validar([])).toBe(true); // Las listas también son objetos
    });

    test('Debe validar que un objeto contenga campos requeridos',()=>{
        const validacionCamposReq= new ObjectCamposValidacion(['nombre','edad']);
        expect(validacionCamposReq.validar({nombre:'Maria', edad:23})).toBe(true);
        expect(validacionCamposReq.validar({nombre:'Martin'})).toBe(false);
    })
});
