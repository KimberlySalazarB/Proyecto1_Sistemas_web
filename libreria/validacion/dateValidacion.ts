import { ValidacionStrategy } from "../strategy/validacionStrategy";


//Clase que implementa la estrategia de validación de fechas.
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

//Clase que implementa la estrategia para la validación de fechas pasadas.

// ANTES
/*
export class DatePasadaValidacion implements ValidacionStrategy<Date>{
    validar(input: Date): boolean {
        if(input < new Date()){
            return true
        }
        return false
    }

}
*/

//DESPUES- Refactorizar
export class DatePasadaValidacion implements ValidacionStrategy<Date>{
    validar(input: Date): boolean {
        return input < new Date();
    }
}



