/* exported takeRight */
function takeRight(array, count) {
  var container = [];
  for (var i = array.length - count; i < array.length; i++) {
    container.push(array[i]);
  }
  if (count > array.length) {
    return [];
  }
  return container;
}
