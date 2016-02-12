function diff(arr1, arr2) {
  var newArr = [];
  for (var i = 0; i < arr1.length; i++) {
    console.log(arr2.indexOf(arr1[i]));
    if (arr2.indexOf(arr1[i]) == -1) {
      newArr.push(arr1[i]);
    }
  }
  for (var j = 0; j < arr2.length; j++) {
    console.log(arr1.indexOf(j));
    if (arr1.indexOf(arr2[j]) == -1) {
      newArr.push(arr2[j]);
    }
  }
  return newArr;
}
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
