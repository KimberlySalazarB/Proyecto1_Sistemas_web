import { ValidacionStrategy } from "../strategy/validacionStrategy";

export class DateValidacion implements ValidacionStrategy<Date>{
    validar(value: Date): boolean {
        return value instanceof Date && !isNaN(value.getTime());
    }
}


