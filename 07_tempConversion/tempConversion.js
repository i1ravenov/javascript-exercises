const convertToCelsius = function (fahrenheit) {
  return round((fahrenheit - 32) * 5 / 9);
};

const convertToFahrenheit = function (celsius) {
  return round(celsius * 9 / 5 + 32);
};

function round(num) {
  return Math.round(num * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
