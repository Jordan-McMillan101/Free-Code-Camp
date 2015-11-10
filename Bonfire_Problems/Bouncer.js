/**
 * Given an array[], will remove all falsy(ie. false, null, 0, NaN, undefined, "") values from the array
 * @param  {array[]} 
 * @return {array[]}     array[] without falsy values
 */
function bouncer(arr) {
	newArr = [];
	newArr = arr.filter(function(val){ // traverse through the arr[]
	 	var x = Boolean(val);  //boolean object will be initialized to false if it's initialized to a falsy value
    	if (x) {
    		return newArr.push(val);  // push non-falsy value 
    	}
    });
    return newArr;
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([false, null, 0, NaN, undefined, ""]));
