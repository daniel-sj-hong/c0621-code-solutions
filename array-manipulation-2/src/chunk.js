/* exported chunk */
function chunk(array, size) {
  var finalArray = [];
  var weirdArray = [];
  for (var i = 0; i < array.length; i++) {
    weirdArray.push(array[i]);
    if (weirdArray.length === size) {
      finalArray.push(weirdArray);
      weirdArray = [];
    }
  }
  return finalArray;
}
