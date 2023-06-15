const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((a, b) => {
    return a + b;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => {
    return a * b;
  }, 1);
};

const power = function (a, pow) {
  return a ** pow;
};

const factorial = function (n) {
  let res = 1; 
  for (let i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
