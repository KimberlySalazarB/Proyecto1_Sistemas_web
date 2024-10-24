import { StringValidacion,NombreStringValidacion} from "../libreria";

describe('StringValidacion',()=>{
    test('Debe validar una cadena no vacia',()=>{
        const validacion=new StringValidacion();
        expect(validacion.validar("hello")).toBe(true);
        expect(validacion.validar('')).toBe(false);
    });
    test('Debe validar una cadena de nombre',()=>{
        const validacion=new NombreStringValidacion();
        expect(validacion.validar("Lupita")).toBe(true);
        expect(validacion.validar('')).toBe(false);
        expect(validacion.validar('1L')).toBe(false);
        expect(validacion.validar('1L345H')).toBe(false);
    });

})