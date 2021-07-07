/* exported lastChars */
function lastChars(length, string) {
  var container = '';
  for (var i = string.length - length; i < string.length; i++) {
    container += string[i];
  }
  if (length > string.length) {
    return string;
  }
  return container;
}
