/* exported take */
function take(array, count) {
  var container = [];
  for (var i = 0; i < count; i++) {
    if (count > array.length) {
      return [];
    }
    container.push(array[i]);
  }
  return container;
}
