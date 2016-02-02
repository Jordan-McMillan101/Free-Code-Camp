/**
 * will return true if the given string is a palindrome
 * @param  {string} str String can be one word or multiple words. It can also contain any case lettering.
 * @return {boolean}     true if palindrome, false otherwise.
 */
function palindrome(str) {
  str = str.replace(/[!.,?()\/\\"'_;-]/g, "");  //first remove all puncuations
  console.log(str);
  str = str.replace(/\s/g, "").toLowerCase(); // then convert to lower case and remove white spaces
  end = str.length-1;  // end will be set to the last letter of the string
  for (var start = 0; start < str.length; start++) {
  	if (str.charAt(start) !== str.charAt(end)){
  		return false;
  	}
  	end--;
  }
  return true;
}


str1 = "\"Race\" Car.";
console.log(palindrome(str1));

str2 = "0_0 (: /-\\ :) 0-0";
console.log(palindrome(str2));
