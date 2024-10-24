import { NumberValidacion,PositivoNumberValidacion, ParNumberValidacion,MayorQueNumberValidacion,ImparNumberValidacion} from "../libreria";

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

    //validación de números pares
    test('Debe validar un número par', () => {
        const validacion = new ParNumberValidacion();
        expect(validacion.validar(2)).toBe(true);
        expect(validacion.validar(3)).toBe(false);
    });

    //validación de números impares
    test('Debe validar un número impar', () => {
        const validacion = new ImparNumberValidacion();
        expect(validacion.validar(3)).toBe(true);
        expect(validacion.validar(4)).toBe(false);
    });

    //validación de números mayores a un valor dado
    test('Debe validar un número mayor que un valor dado', () => {
        const validacion = new MayorQueNumberValidacion(10);
        expect(validacion.validar(20)).toBe(true);
        expect(validacion.validar(5)).toBe(false);
    });
});