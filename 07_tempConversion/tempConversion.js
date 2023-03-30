const convertToCelsius = function(f_temp) {
  let celsius_temp = (f_temp - 32)*(5/9);
  let rounded_cTemp = parseFloat(((celsius_temp*100)/100).toFixed(1));
  return rounded_cTemp;
};

const convertToFahrenheit = function(c_temp) {
  let fahrenheit_temp = c_temp*(9/5) + 32;
  let rounded_fTemp = parseFloat(((fahrenheit_temp*100)/100).toFixed(1));
  return rounded_fTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
