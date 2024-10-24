import { NumberValidacion,PositivoNumberValidacion} from "../libreria";

//validacion de numero
describe('NumberValidacion',()=>{
    test('Debe validar un numero valido',()=>{
        const validacion=new NumberValidacion();
        expect(validacion.validar(123)).toBe(true);
        expect(validacion.validar(NaN)).toBe(false);
    })
    //validacion de numero positivo
    test('Debe validar un numero positivo',()=>{
        const validacion=new PositivoNumberValidacion();
        expect(validacion.validar(123)).toBe(true);
        expect(validacion.validar(-10)).toBe(false);
    })
});