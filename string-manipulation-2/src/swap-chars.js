/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var finalString = '';
  var firstIndexValue = string[firstIndex];
  var secondIndexValue = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      finalString += secondIndexValue;
    } else if (i === secondIndex) {
      finalString += firstIndexValue;
    } else {
      finalString += string[i];
    }
  }
  return finalString;
}
