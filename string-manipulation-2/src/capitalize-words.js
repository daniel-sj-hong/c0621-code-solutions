/* exported capitalizeWords */
function capitalizeWords(word) {
  var container = word.toLowerCase();
  var string = '';
  var finalString = '';
  string += word.charAt(0).toUpperCase();
  for (var i = 1; i < container.length; i++) {
    if (container[i - 1] === ' ') {
      finalString += container.charAt(i).toUpperCase();
      continue;
    }
    string += container[i];
    finalString += string;
    string = '';
  }
  return finalString;
}
