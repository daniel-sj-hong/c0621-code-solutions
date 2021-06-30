/* exported compact */
function compact(array) {
  var container = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      container.push(array[i]);
    }
  }
  return container;
}
