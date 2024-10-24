import { ValidacionStrategy } from "../strategy/validacionStrategy";

export class ObjectValidacion implements ValidacionStrategy<object>{
    validar(value: object): boolean {
        return value!==null && typeof value =='object';
    }
}