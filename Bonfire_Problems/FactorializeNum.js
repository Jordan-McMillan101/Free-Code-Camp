
/**
 * will return the value of the factorial
 * @param  {integer} num must be an integer
 * @return {integer}     the solved value of the factorial
 */
function factorialize(num) {
  var value = 1;
  for (var i = num; i >= 1;  i--) {
  	value = i*value;
  }
  return value;
}

number = 10;
console.log(factorialize(number));
