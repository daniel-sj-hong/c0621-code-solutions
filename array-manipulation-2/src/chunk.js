/* exported chunk */
function chunk(array, size) {
  var tookenArray = [];
  var takenArray = [];
  for (var i = 0; i < array.length; i++) {
    takenArray.push(array[i]);
    if (takenArray.length >= size) {
      tookenArray.push(takenArray);
      takenArray = [];
    }
  }
  if (takenArray.length < size && takenArray.length === 1) {
    tookenArray.push(takenArray);
  }
  return tookenArray;
}

// create two empty array literals.
// loop through the the array parameter.
// push every value of parameter array into takenArray until it hits the value of the size parameter
// once it hits the size parameter, push taken into tooken
// empty taken
// return tooken
