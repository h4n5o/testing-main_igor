function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}


function subtract(a, b) {
  /**
   * Gibt die Differenz zw. B und A an.
   */
  return a - b;
}

function multiply(a, b) {
  /**
   * Gibt das Produkt von A und B an. 
   */
  return a * b;
}
// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.sum = sum;
module.exports.divide = divide;
module.exports.multiply = multiply;
module.exports.divide = divide;
