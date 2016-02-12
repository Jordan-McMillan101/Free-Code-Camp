/**
 * Give an array[] of elements and an integer, will return a new array of arrays with the length of the integer, remaining
 * @param  {array[]} arr  array of elements
 * @param  {integer} positive integer for the size of each sub array
 * @return {array}      multidemensional array
 */
function chunk(arr, size) {
	var newArr = [];

    if (size < 2){
    	return arr;
    }
    for (var i = 0; i < arr.length; i += size){

    	newArr.push(arr.slice(i,i+size));

    }
    return newArr;
}



console.log(chunk(["a", "b", "c", "d"], 2));
console.log(chunk([0, 1, 2, 3, 4, 5], 3));
console.log(chunk([0, 1, 2, 3, 4, 5], 4));
