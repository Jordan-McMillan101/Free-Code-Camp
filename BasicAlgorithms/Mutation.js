
/**
 * Will return true if the all of the letters in the first string appear in the second string
 * @param  {array[]} array[] of two string elements
 * @return {Boolean}     return boolean
 */
function mutation(arr) {
	for (i = 0; i < arr[1].length; i++) {
		if (arr[0].toLowerCase().indexOf(arr[1][i].toLowerCase()) === -1){  // will return -1 (false) if the letters in the second string do not exist in the first
			return false;
		}
	}
	return true;
}

console.log(mutation(["hello", "hey"]));
console.log(mutation(["hello", "hello"]));
console.log(mutation(["Mary", "ArMY"]));
