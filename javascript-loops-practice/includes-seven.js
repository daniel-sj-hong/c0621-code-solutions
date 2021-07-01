/* exported includesSeven */
function includesSeven(array) {
  var boo = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return boo;
}
