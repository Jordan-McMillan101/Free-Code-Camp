/**
 * Will reverse the provided string
 * @param  {string} str This can be a single word or even an entire sentence.
 * @return {string}     The reversed string.
 */
function reverseString(str) {
	var arr = []; 
	var len = str.length;
	for (var i = 0; i < str.length; i++) {
	console.log(str[i]);
	arr[len-i-1] = str[i];
    }
	str1 = arr.join("");
	return str1;
}



// ---------------------------------------------------------
name = "Jordan mcmillan is soooooo cool!";
console.log(reverseString(name));
