/**
 * Patron de diesño Strategy
 * Interfaz para la estrategia de validación.
 * @template T Tipo generico del valor a validar.
 */
export interface ValidacionStrategy<T> {
  /**
     * Método para validar un valor.
     * @param {T} input - El valor a validar de tipo generico.
     * @returns {boolean} El resultado de la validación.
     */

    validar(input: T): boolean; 
}

  //Esta clase mantiene una referencia a una de las estrategias
  //y se comunica a través del método validar para ejecutar una estrategia

/**
 * Contexto para aplicar diferentes estrategias de validación.
 * @template T Tipo (generico) del valor a validar.
 */
export class ValidacionContext<T>{
    private strategy:ValidacionStrategy<T>;

    /**
     * Constructor que recibe una estrategia de validación.
     * @param {ValidacionStrategy<T>} strategy - La estrategia de validación a usar.
     */

    constructor(strategy: ValidacionStrategy<T>) {
        this.strategy = strategy;
      }

    /**
     * Establece una nueva estrategia de validación.
     * @param {ValidacionStrategy<T>} strategy - La nueva estrategia de validación.
     */
    establecerStrategy(strategy: ValidacionStrategy<T>) {
        this.strategy = strategy;
      }
    
      /**
     * Aplica la estrategia de validación al valor dado.
     * @param {T} value - El valor a validar (tipo generico).
     * @returns {boolean} El resultado de la validación.
     */

    validar(value: T): boolean {
        return this.strategy.validar(value);
      }
}
