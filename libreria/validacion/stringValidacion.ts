import { ValidacionStrategy } from "../strategy/validacionStrategy";

export class StringValidacion implements ValidacionStrategy<string>{
    validar(value: string): boolean {
        if(typeof value=="string" && value.trim().length>0){
            return true;
        }
        return false;
    }
}

export class NombreStringValidacion implements ValidacionStrategy<string>{
    validar(value: string): boolean {
        if(value.length>3){

            //Validacion solo letras y espacios
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