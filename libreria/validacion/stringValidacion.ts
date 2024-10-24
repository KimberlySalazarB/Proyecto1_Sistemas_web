import { ValidacionStrategy } from "../strategy/validacionStrategy";

/**
 * Clase que implementa la validación de cadenas de texto.
 */
export class StringValidacion implements ValidacionStrategy<string>{
    
    /**
     * Valida si el valor es una cadena no vacía.
     * @param {string} value - La cadena a validar.
     * @returns {boolean} True si la cadena es válida, False en caso contrario.
     */

    validar(value: string): boolean {
        if(typeof value=="string" && value.trim().length>0){
            return true;
        }
        return false;
    }
}

/**
 * Clase que implementa la validación de nombres.
 */
export class NombreStringValidacion implements ValidacionStrategy<string>{
    
    /**
     * Valida si la cadena tiene un formato de nombre válido.
     * @param {string} value - La cadena a validar.
     * @returns {boolean} True si el nombre es válido, False en caso contrario.
     */

    validar(value: string): boolean {
        if(value.length>3){

            //Validacion solo letras y espacios codigo ASCCI
            for(let i=0;i<value.length;i++){
                const char=value.charAt(i);
                const code=char.charCodeAt(0);
                const isUpperCase=code >=65 && code<=90;
                const isLowerCase=code >=97 && code <=122;
                const isSpace=char===' ';
                
                //Si encuentra un  caracter no valido retorna false
                if(!(isUpperCase||isLowerCase||isSpace)){
                    return false;
                }
            }
            return true; //Todos los caracteres son validos
        }
        return false; // La cadena es demasiado corta
    }
}

