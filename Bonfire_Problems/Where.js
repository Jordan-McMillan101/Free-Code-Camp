/**
 * Will return the lowest index at which a value(second argument) should be inserted 
 * into an array (first argument) once it has been sorted
 * @param  {array[]} arr 
 * @param  {integer} num 
 * @return {integer}  the index position where the num should go     
 */
function where(arr, num) {
	arr.sort(function(a,b) {  // use compare function to place integers into ascending order
		return a - b;
	});
    console.log(arr);
    var previous = arr[0];
    for (var i = 0; i < arr.length; i++) {
    	if (arr[i] >= num) { // return the current index when it finds the integer which is >= num
    		return i;
    	}
    	if (i === arr.length-1) {  // if the appropriate index is the last index of the array return arr.length-1(last index)
    		return i+1;
    	}
    }
}

console.log(where([40, 60], 50));
console.log(where([5, 3, 20, 3], 5));
console.log(where([2, 5, 10], 15));




