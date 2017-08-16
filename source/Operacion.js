
/**
 * Operacion
 * @class
 */
function Operacion () {
  
  this.suma = suma;
  this.producto = producto;
  this.diferencia = diferencia;
  this.cociente = cociente;

  ////////////

  /**
   * Cálculo de la suma de 2 valores
   * @public
   * @param {number} a - Primer valor
   * @param {number} b - Segundo valor
   * @return {number}
   */
  function suma (a, b) {
    if ( typeof a === 'number' && typeof b === 'number' ) {
      return a + b;
    }
  }

  /**
   * Cálculo del producto de 2 valores
   * @public
   * @param {number} a - Primer valor
   * @param {number} b - Segundo valor
   * @return {number}
   */
  function producto (a, b) {
    if ( typeof a === 'number' && typeof b === 'number' ) {
      return a * b;
    } 
  }

  /**
   * Cálculo de la diferencia de 2 valores
   * @public
   * @param {number} a - Primer valor
   * @param {number} b - Segundo valor
   * @return {number}
   */
  function diferencia (a, b) {
    if ( typeof a === 'number' && typeof b === 'number' ) {
      return a - b;
    } 
  }

  /**
   * Cálculo del cociente de 2 valores
   * @public
   * @param {number} a - Primer valor
   * @param {number} b - Segundo valor
   * @return {number}
   */
  function cociente (a, b) {
    if ( typeof a === 'number' && typeof b === 'number' ) {
      return a / b;
    } 
  }
}
