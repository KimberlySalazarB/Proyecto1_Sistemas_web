import { ValidacionStrategy } from "../strategy/validacionStrategy";

/**
 * Clase que implementa la validación de números.
 */

export class NumberValidacion implements ValidacionStrategy<number>{
    /**
     * Valida si el valor es un número válido.
     * @param {number} value - El número a validar.
     * @returns {boolean} True si es un número válido, False en caso contrario.
     */
    validar(value: number): boolean {
        if(typeof value ==='number'&& !isNaN(value)){
            return true;
        };
        return false;
    }
}

/**
 * Clase que implementa la validación de números positivos.
 */

export class PositivoNumberValidacion implements ValidacionStrategy<number>{

    /**
     * Valida si el número es positivo.
     * @param {number} value - El número a validar.
     * @returns {boolean} True si el número es positivo, False en caso contrario.
     */

    validar(value: number): boolean {
        return value>0;
    }
}

/**
 * Clase que implementa la validación de números pares.
 */
export class ParNumberValidacion implements ValidacionStrategy<number> {

    /**
     * Valida si el número es par.
     * @param {number} value - El número a validar.
     * @returns {boolean} True si el número es par, False en caso contrario.
     */

    validar(value: number): boolean {
      return value % 2 === 0;
    }
}

/**
 * Clase que implementa la validación de números impares.
 */
export class ImparNumberValidacion implements ValidacionStrategy<number> {
    
    /**
     * Valida si el número es impar.
     * @param {number} value - El número a validar.
     * @returns {boolean} True si el número es impar, False en caso contrario.
     */

    validar(value: number): boolean {
      return value % 2 !== 0;
    }
}


/**
 * Clase que implementa la validación de números mayores a un valor dado.
 */
export class MayorQueNumberValidacion implements ValidacionStrategy<number> {
    private minValue: number;
  
    constructor(minValue: number) {
      this.minValue = minValue;
    }
    
    /**
     * Valida si el número es mayor que el numero dado.
     * @param {number} value - El número mayor que un numero dado miniValue.
     * @returns {boolean} True si el número es mayor, False en caso contrario.
     */

    validar(value: number): boolean {
      return value > this.minValue;
    }
}
