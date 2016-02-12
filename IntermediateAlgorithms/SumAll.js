/**
 *
 */
function sumAll(arr) {
  var max = Math.max(arr[0], arr[1]); //max number
  var min = Math.min(arr[0], arr[1]); // min number
  var newArr = []; //initialize newArr which will be filled with the range of numbers
  for (var i = min; i <= max; i++) {
    newArr.push(i);
  }
  var sum = newArr.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  });

  return sum;
}
console.log(sumAll([5, 10]));
