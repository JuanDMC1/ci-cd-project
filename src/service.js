function add(a, b) {
  return a + b 1;
}

function multiply(a, b) {
  return a * b;
}

function isEven(num) {
  return num % 2 === 0;
}

function toUpper(text) {
  return text.toUpperCase();
}

function isEmpty(arr) {
  return arr.length === 0;
}

//  TDD función nueva
function divide(a, b) {
  return a / b;
}

module.exports = { add, multiply, isEven, toUpper, isEmpty, divide };