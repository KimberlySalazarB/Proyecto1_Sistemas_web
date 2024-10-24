import { ValidacionStrategy } from "./validacionStrategy";
import { NumberValidacion,PositivoNumberValidacion,ParNumberValidacion,ImparNumberValidacion,MayorQueNumberValidacion} from "../validacion/numberValidacion";
import { ObjectValidacion } from "../validacion/objectValidacion";
import { StringValidacion,NombreStringValidacion} from "../validacion/stringValidacion";
import { DateValidacion } from "../validacion/dateValidacion";


/**
 * Clase abstracta que define el método Factory para crear estrategias de validación.
 * @template T El tipo de dato generico.
 */
abstract class Creador<T>{
  
    /**
     * Método Factory para crear la estrategia de validación.
     * @returns {ValidacionStrategy<T>} La estrategia de validación creada.
     */
    public abstract createValidacion():ValidacionStrategy<T>;

    /**
     * Método que utiliza la validación creada.
     * @param {T} value - El valor a validar de tipo generico.
     * @returns {boolean} El resultado de la validación: false o true.
     */

    public realizarValidacion(value: T): boolean {
        const validacion = this.createValidacion();
        return validacion.validar(value);
  }
}


// Implementación concreta del Factory para validación de números
export class NumberValidacionFactory extends Creador<number> {

    /**
     * Crea una instancia de NumberValidacion.
     * @returns {ValidacionStrategy<number>} Estrategia de validación de números.
     */

    public createValidacion(): ValidacionStrategy<number> {
      return new NumberValidacion();
    }
}

// Implementación concreta del Factory para validación de números positivos
export class PositivoNumberValidacionFactory extends Creador<number> {

  /**
     * Crea una instancia de PositivoNumberValidacion.
     * @returns {ValidacionStrategy<number>} Estrategia de validación de números positivos.
     */

  public createValidacion(): ValidacionStrategy<number> {
    return new PositivoNumberValidacion();
  }
}

// Implementación concreta del Factory para validación de números pares
export class ParNumberValidacionFactory extends Creador<number> {

  /**
     * Crea una instancia de ParNumberValidacion.
     * @returns {ValidacionStrategy<number>} Estrategia de validación de números pares.
     */

  public createValidacion(): ValidacionStrategy<number> {
    return new ParNumberValidacion();
  }
}

// Implementación concreta del Factory para validación de números impares
export class ImparNumberValidacionFactory extends Creador<number> {
  /**
     * Crea una instancia de ImparNumberValidacion.
     * @returns {ValidacionStrategy<number>} Estrategia de validación de números impares.
     */
  public createValidacion(): ValidacionStrategy<number> {
    return new ImparNumberValidacion();
  }
}

// Implementación concreta del Factory para validación de números mayores a un valor dado
export class MayorQueNumberValidacionFactory extends Creador<number> {
  
  private minValue: number;
  constructor(minValue: number) {
    super();
    this.minValue = minValue;
  }

  /**
     * Crea una instancia de MayorQueNumberValidacion.
     * @returns {ValidacionStrategy<number>} Estrategia de validación de números mayores a un numero dado.
     */

  public createValidacion(): ValidacionStrategy<number> {
    return new MayorQueNumberValidacion(this.minValue);
  }
}

// Implementación concreta del Factory para validación de objetos
export class ObjectValidacionFactory extends Creador<object> {

    /**
     * Crea una instancia de ObjectValidacion.
     * @returns {ValidacionStrategy<object>} Estrategia de validación de objetos.
     */

    public createValidacion(): ValidacionStrategy<object> {
      return new ObjectValidacion();
    }
}

// Implementación concreta del Factory para validación de fechas
export class DateValidacionFactory extends Creador<Date> {

    /**
     * Crea una instancia de DateValidacion.
     * @returns {ValidacionStrategy<Date>} Estrategia de validación de fechas.
     */

    public createValidacion(): ValidacionStrategy<Date> {
      return new DateValidacion();
    }
}
  
// Implementación concreta del Factory para validación de cadenas
export class StringValidacionFactory extends Creador<string> {

    /**
     * Crea una instancia de StringValidacion.
     * @returns {ValidacionStrategy<string>} Estrategia de validación de cadenas.
     */

    public createValidacion(): ValidacionStrategy<string> {
      return new StringValidacion();
    }
}

// Implementación concreta del Factory para validación de nombres
export class NombreStringValidacionFactory extends Creador<string> {
  /**
     * Crea una instancia de NombreStringValidacion.
     * @returns {ValidacionStrategy<string>} Estrategia de validación de nombres.
  */
  public createValidacion(): ValidacionStrategy<string> {
    return new NombreStringValidacion();
  }
}


