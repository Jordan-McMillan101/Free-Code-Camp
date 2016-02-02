/**
 * given a string and an integer, the funtion will return the string num number of times
 * @param  {string} str [description]
 * @param  {integer} num can be negative or positive
 * @return {string}     if num is less than 3, will return an empty string,
 *                      if the string is a negative integer, will return an empty string, 
 */
function repeat(str, num) {
	var newstr = "";
	if (num < 0) {
    	return "\"\"";    
  	}
  	for (var i = 0; i < num; i++) {
  		newstr = newstr.concat(str);
  	}
  	return newstr;
}


console.log(repeat("Jordan", 4));
console.log(repeat("abc", 4));
console.log(repeat("abc", -4));
