/* exported reverse */
function reverse(array) {
  var container = [];
  for (var i = array.length - 1; i >= 0; i--) {
    container.push(array[i]);
  }
  return container;
}
