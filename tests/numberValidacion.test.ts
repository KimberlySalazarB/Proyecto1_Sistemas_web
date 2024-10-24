import { NumberValidacion} from "../libreria";

//validacion de numero
describe('NumberValidacion',()=>{
    test('Debe validar un numero valido',()=>{
        const validacion=new NumberValidacion();
        expect(validacion.validar(123)).toBe(true);
        expect(validacion.validar(NaN)).toBe(false);
    })
});