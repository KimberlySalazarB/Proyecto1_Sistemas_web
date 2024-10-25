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


//Clase que implementa la validación de objeto contenga campos requeridos

/*ANTES
export class ObjectCamposValidacion implements ValidacionStrategy<object>{

    constructor(private requerimientos: string[]) {}

    validar(data: object): boolean {
        if(data!==null){
            return this.requerimientos.every((campo)=> campo in data);
            
        }else{
           return false
        }
    }
}
*/
//DESPUES
export class ObjectCamposValidacion implements ValidacionStrategy<object>{

    constructor(private requerimientos: string[]) {}

    validar(data: object): boolean {
        return data!==null && this.requerimientos.every((campo)=> campo in data)
    }

}