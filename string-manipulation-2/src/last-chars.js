/* exported lastChars */
function lastChars(length, string) {
  var container = '';
  if (length > string.length) {
    return string;
  }
  for (var i = string.length - length; i < string.length; i++) {
    container += string[i];
  }
  return container;
}

// create the container that will hold the string that you will be returning
// create the loop and start it at the end minus the length parameter and it will go until the string.length
// each iteration push string[i] into the container
// if length > string.length then return the string
// return the container
