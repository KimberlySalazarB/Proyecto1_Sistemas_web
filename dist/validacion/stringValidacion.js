/*ANTES
export class StringValidacion implements ValidacionStrategy<string>{

    validar(value: string): boolean {
        if(typeof value=="string" && value.trim().length>0){
            return true;
        }
        return false;
    }
}
*/
/**DESPUES
 * Clase que implementa la validación de cadenas de texto.
 */
export class StringValidacion {
    /**
     * Valida si el valor es una cadena no vacía.
     * @param {string} value - La cadena a validar.
     * @returns {boolean} True si la cadena es válida, False en caso contrario.
     */
    validar(value) {
        return typeof value === 'string' && value.trim().length > 0;
    }
}
/**
 * Clase que implementa la validación de nombres.
 */
export class NombreStringValidacion {
    validar(value) {
        if (value.length > 3) {
            /**
                * Valida si la cadena tiene un formato de nombre válido.
                * @param {string} value - La cadena a validar.
                * @returns {boolean} True si el nombre es válido, False en caso contrario.
            */
            //Validacion solo letras y espacios codigo ASCCI
            for (let i = 0; i < value.length; i++) {
                const char = value.charAt(i);
                const code = char.charCodeAt(0);
                const isUpperCase = code >= 65 && code <= 90;
                const isLowerCase = code >= 97 && code <= 122;
                const isSpace = char === ' ';
                //Si encuentra un  caracter no valido retorna false
                if (!(isUpperCase || isLowerCase || isSpace)) {
                    return false;
                }
            }
            return true; //Todos los caracteres son validos
        }
        return false; // La cadena es demasiado corta
    }
}
//Clase que implementa la validacion de la longitud de una cadena no exceda del maximo
/*
export class LongitudStringValidacion implements ValidacionStrategy<string>{
    
    constructor(private maximaLong:number){}

    validar(cadena: string): boolean {
        if(cadena.length<=this.maximaLong){
            return true
        }
        return false
    }
}
*/
export class LongitudStringValidacion {
    constructor(maximaLong) {
        this.maximaLong = maximaLong;
    }
    validar(cadena) {
        return cadena.length <= this.maximaLong;
    }
}
