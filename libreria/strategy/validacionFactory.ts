import { ValidacionStrategy } from "./validacionStrategy";
import { NumberValidacion} from "../validacion/numberValidacion";
import { ObjectValidacion } from "../validacion/objectValidacion";
import { StringValidacion,NombreStringValidacion} from "../validacion/stringValidacion";
import { DateValidacion } from "../validacion/dateValidacion";

// Implementación del patrón Factory
abstract class Creador<T>{
    // Método Factory para crear la estrategia de validación
    public abstract createValidacion():ValidacionStrategy<T>;

    // Método que utiliza la validación creada
    public realizarValidacion(value: T): boolean {
        const validacion = this.createValidacion();
        return validacion.validar(value);
  }
}

// Implementación concreta del Factory para validación de números
export class NumberValidacionFactory extends Creador<number> {
    public createValidacion(): ValidacionStrategy<number> {
      return new NumberValidacion();
    }
}

// Implementación concreta del Factory para validación de objetos
export class ObjectValidacionFactory extends Creador<object> {
    public createValidacion(): ValidacionStrategy<object> {
      return new ObjectValidacion();
    }
}

// Implementación concreta del Factory para validación de fechas
export class DateValidacionFactory extends Creador<Date> {
    public createValidacion(): ValidacionStrategy<Date> {
      return new DateValidacion();
    }
}
  
// Implementación concreta del Factory para validación de cadenas
export class StringValidacionFactory extends Creador<string> {
    public createValidacion(): ValidacionStrategy<string> {
      return new StringValidacion();
    }
}

// Implementación concreta del Factory para validación de nombres
export class NombreStringValidacionFactory extends Creador<string> {
  public createValidacion(): ValidacionStrategy<string> {
    return new NombreStringValidacion();
  }
}


