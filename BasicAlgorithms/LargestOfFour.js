/**
 * given an array of arrays this funtion will return the largest number in each of the subarrays
 * @param  {array} arr this array will contain subarrays
 * @return {array}     will return an array of the largest number in each of the subarrays
 */
function largestOfFour(arr) {
	var largestArray = [];
    var currNum = 0;
    var largestNum = 0;
    for (var i = 0; i < arr.length; i++) {
    	 for (var j = 0; j < arr[i].length; j++) {
    	 	currNum = arr[i][j];
    	 	if (currNum > largestNum){
    	 		largestNum = currNum;
    	 	}
    	 }
    	 largestArray.push(largestNum);
    	 largestNum = 0;
    }
    return largestArray;
}




console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
