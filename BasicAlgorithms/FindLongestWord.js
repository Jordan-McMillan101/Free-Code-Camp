/**
 * given a string it will return the length of the longest string or substring
 * @param  {string} str can be one word or multiple
 * @return {integer}     length of the longest string
 */
function findLongestWord(str) {
	var arrOfStrings = str.split(" ");
	var longest = arrOfStrings[0].length;
	var current = 0;
	for (var i = 1; i < arrOfStrings.length; i++) {
		current = arrOfStrings[i].length;
		if (current > longest) {
			longest = current;
		}
	}
	return longest;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
