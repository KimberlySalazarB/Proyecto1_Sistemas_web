import { ValidacionStrategy } from "../strategy/validacionStrategy";

/**
 * Clase que implementa la estrategia de validación de fechas.
 */
export class DateValidacion implements ValidacionStrategy<Date>{

    /**
     * Valida si el valor dado es una fecha válida.
     * @param {Date} value - El valor a validar.
     * @returns {boolean} True si el valor es una fecha válida, False en caso contrario.
     */
    
    validar(value: Date): boolean {
        return value instanceof Date && !isNaN(value.getTime());
    }
}


