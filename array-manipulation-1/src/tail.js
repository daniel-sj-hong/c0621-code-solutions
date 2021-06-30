/* exported tail */
function tail(array) {
  var container = [];
  for (var i = 1; i < array.length; i++) {
    container.push(array[i]);
  }
  return container;
}
