/* exported initial */
function initial(array) {
  var container = [];
  for (var i = 1; i < array.length; i++) {
    container.push(array[i - 1]);
  }
  return container;
}
