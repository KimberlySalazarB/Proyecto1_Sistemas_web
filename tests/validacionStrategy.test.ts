import { ValidacionContext } from "../libreria";
import { NumberValidacion } from "../libreria";
import { StringValidacion } from "../libreria";

describe('ValidacionContext', () => {
    let context: ValidacionContext<any>;
    let stringValidacion: StringValidacion;
    let numberValidacion: NumberValidacion;

    //Llamadas antes de cada prueba
    beforeEach(() => {
      stringValidacion = new StringValidacion();
      numberValidacion = new NumberValidacion();
    });
  
    test('Debe permitir cambiar la estrategia y validar el valor correcto', () => {
      context = new ValidacionContext(stringValidacion);
      expect(context.validar('hello')).toBe(true);
      context.establecerStrategy(numberValidacion);
      expect(context.validar(123)).toBe(true);
    });

});


