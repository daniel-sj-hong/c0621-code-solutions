/* exported reverseWord */
function reverseWord(word) {
  var container = '';
  for (var i = word.length - 1; i >= 0; i--) {
    container += word[i];
  }
  return container;
}
