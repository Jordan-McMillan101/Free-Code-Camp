/**
 * { rot13 will take a string and shift each letter of the string to the right 13 letters }
 *
 * @param      {string}  str     A string
 * @return     {string}  { string whose letters are shifted to the right 13 letters }
 */
function rot13(str) {
  var newStr = '';
  var max = 90; // Letter Z
  var min = 65; // Letter A
  var remainder = 0;
  
  for (var i = 0; i < str.length; i++) {
  	if (str.charCodeAt(i) < min){ //if character is a space or puncuation simply add that space or puncuation to the newStr
  		newStr = newStr + String.fromCharCode(str.charCodeAt(i));
  	} else if ((str.charCodeAt(i) + 13) > 90){ //if over 90, calculate by how much and then add that remainder from 65
		remainder = max - (str.charCodeAt(i));
		newStr = newStr + String.fromCharCode((13 - remainder) + min - 1);
	} else { //value < 90 && value > 65, so continue with letter conversion
		newStr = newStr + String.fromCharCode(str.charCodeAt(i) + 13);	
	}
  }
  return newStr;
}
//test cases
console.log(rot13("SERR PBQR PNZC")); //"FREE CODE CAMP"
console.log(rot13("SERR CVMMN!"));// "FREE PIZZA!"
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.")); //"THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."


