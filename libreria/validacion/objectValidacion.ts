import { ValidacionStrategy } from "../strategy/validacionStrategy";

/**
 * Clase que implementa la validación de objetos.
 */
export class ObjectValidacion implements ValidacionStrategy<object>{
    /**
     * Valida si el valor es un objeto y no null.
     * @param {object} value - El object a validar.
     * @returns {boolean} True si el objeto es válida, False en caso contrario.
     */

    validar(value: object): boolean {
        return value!==null && typeof value =='object';
    }
}

