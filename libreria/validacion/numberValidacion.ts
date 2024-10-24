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

// Estrategia de validar números pares
export class ParNumberValidacion implements ValidacionStrategy<number> {
    validar(value: number): boolean {
      return value % 2 === 0;
    }
}

// Estrategia de validar números impares
export class ImparNumberValidacion implements ValidacionStrategy<number> {
    validar(value: number): boolean {
      return value % 2 !== 0;
    }
}