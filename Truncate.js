/**
 * Given a string and an integer this funtion will truncate the string followed by "..."
 * @param  {string} 	
 * @param  {integer} num positive integer
 * @return {string}    a truncated string followed by "..."
 *                     return the string if str.length is equal to the integer or str.length is less than the integer
 *                     return str.slice(0,-integer) if string <= 3, "..." is not counted in the string length
 */
function truncate(str, num) {
	var newstr = "";
	if(str.length === num || str.length < num){
		return str;
	}
	if(str.length <= 3){
  		str = str.slice(0,-num);
  		str = str.concat("...");

  	} else {
  		str = str.slice(0,num-str.length-3);
  		str = str.concat("...");
  	}
  return str;
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", 11));

console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length));
console.log(truncate("A-", 1));
console.log(truncate("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
