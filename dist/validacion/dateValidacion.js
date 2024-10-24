/**
 * Clase que implementa la estrategia de validación de fechas.
 */
export class DateValidacion {
    /**
     * Valida si el valor dado es una fecha válida.
     * @param {Date} value - El valor a validar.
     * @returns {boolean} True si el valor es una fecha válida, False en caso contrario.
     */
    validar(value) {
        return value instanceof Date && !isNaN(value.getTime());
    }
}
console.log("El módulo se ha ejecutado correctamente");
