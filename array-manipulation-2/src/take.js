/* exported take */
function take(array, count) {
  var container = [];
  if (count > array.length) {
    return [];
  }
  for (var i = 0; i < count; i++) {
    container.push(array[i]);
  }
  return container;
}
