/* exported capitalize */
function capitalize(word) {
  var container = word.toLowerCase();
  var truncate = container.slice(1, word.length);
  var firstLetter = container.slice(0, 1);
  var capitalize = firstLetter.toUpperCase();
  return capitalize + truncate;
}
