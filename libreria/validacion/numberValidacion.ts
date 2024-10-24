import { ValidacionStrategy } from "../strategy/validacionStrategy";

export class NumberValidacion implements ValidacionStrategy<number>{
    validar(value: number): boolean {
        if(typeof value ==='number'&& !isNaN(value)){
            return true;
        };
        return false;
    }
}

export class PositivoNumberValidacion implements ValidacionStrategy<number>{
    validar(value: number): boolean {
        return value>0;
    }
}
