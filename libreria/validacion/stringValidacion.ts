import { ValidacionStrategy } from "../strategy/validacionStrategy";

export class StringValidacion implements ValidacionStrategy<string>{
    validar(value: string): boolean {
        if(typeof value=="string" && value.trim().length>0){
            return true;
        }
        return false;
    }
}
