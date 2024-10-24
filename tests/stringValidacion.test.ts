import { StringValidacion} from "../libreria";

describe('StringValidacion',()=>{
    test('Debe validar una cadena no vacia',()=>{
        const validacion=new StringValidacion();
        expect(validacion.validar("hello")).toBe(true);
        expect(validacion.validar('')).toBe(false);
    });

})