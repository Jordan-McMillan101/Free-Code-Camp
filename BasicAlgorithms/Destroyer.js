function destroyer(arr) {
	//console.log(arguments[2]);
	var args = Array.prototype.slice.call(arguments);
 	args.splice(0,1);
 	return arr.filter(function(element) {
 		return args.indexOf(element) === -1;
 	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));



