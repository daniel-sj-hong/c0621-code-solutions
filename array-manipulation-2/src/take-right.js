/* exported takeRight */
function takeRight(array, count) {
  var container = [];
  if (array.length === 0) {
    return [];
  }
  for (var i = array.length - count; i < array.length; i++) {
    container.push(array[i]);
  }
  return container;
}
