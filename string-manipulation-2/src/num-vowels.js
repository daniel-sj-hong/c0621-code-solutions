/* exported numVowels */
function numVowels(string) {
  var counter = 0;
  var lowerCase = string.toLowerCase();
  for (var i = 0; i < lowerCase.length; i++) {
    if (lowerCase[i] === 'a' || lowerCase[i] === 'e' || lowerCase[i] === 'i' || lowerCase[i] === 'o' || lowerCase[i] === 'u') {
      counter++;
    }
  }
  return counter;
}
