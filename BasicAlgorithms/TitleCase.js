/**
 * given a string 
 * @param  {string} str string can be a single word or an entire phrase
 * @return {string}     returns a string where the first letter of each word is capitalized which can be used as a title
 */
function titleCase(str) {
	str = str.toLowerCase();  //set all letters to lowercase
	var arrOfStrings = str.split(" "); //split string into an array of strings/words
	var currString;
	
	for (var i = 0; i < arrOfStrings.length; i++) {
		currString = arrOfStrings[i];
		currString = currString.replace(currString.charAt(0),currString.charAt(0).toUpperCase());
		arrOfStrings[i] = currString;
	}
	var newStr = arrOfStrings.join(" ");
	return newStr;

}



console.log(titleCase("I'm a little tea pot"));


