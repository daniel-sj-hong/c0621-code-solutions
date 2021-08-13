/* exported includes */
function includes(array, value) {
  var boo = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return boo;
}
