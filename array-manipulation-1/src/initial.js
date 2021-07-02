/* exported initial */
function initial(array) {
  var container = [];
  for (var i = 0; i < array.length - 1; i++) {
    container.push(array[i]);
  }
  return container;
}
