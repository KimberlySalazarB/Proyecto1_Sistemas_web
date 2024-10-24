// Interfaz para la validación genérica
//Patron de diseño Strategy
export interface ValidacionStrategy<T> {
    validar(input: T): boolean; // Declara el metodo
  }

  //Esta clase mantiene una referencia a una de las estrategias
  //y se comunica a través del método validar para ejecutar una estrategia
export class ValidacionContext<T>{
    private strategy:ValidacionStrategy<T>;

    constructor(strategy: ValidacionStrategy<T>) {
        this.strategy = strategy;
      }

    // Método para sustituir la estrategia asociada
    establecerStrategy(strategy: ValidacionStrategy<T>) {
        this.strategy = strategy;
      }
    
    validar(value: T): boolean {
        return this.strategy.validar(value);
      }
}