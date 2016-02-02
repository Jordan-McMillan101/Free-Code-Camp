/**
 * given an array[] and an integer this will return an array with (howMany) number of elements 
 * @param  {array[]} arr     
 * @param  {integer} 
 * @return {array[]}      
 */
function slasher(arr, howMany) {
	
	if (howMany > arr.length) {
		return arr = [];
	}
  if (howMany === 0){
		return arr;
	}
	arr.splice(0,howMany);
	return arr;
}


console.log(slasher([1, 2, 3], -2));
console.log(slasher([1, 2, 3], 9));
console.log(slasher([1, 2, 3], 0));




