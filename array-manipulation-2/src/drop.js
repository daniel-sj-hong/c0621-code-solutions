/* exported drop */
function drop(array, count) {
  var container = [];
  for (var i = count; i < array.length; i++) {
    container.push(array[i]);
  }
  return container;
}
