/* exported dropRight */
function dropRight(array, count) {
  var container = [];
  for (var i = 0; i < array.length - count; i++) {
    container.push(array[i]);
  }
  return container;
}
