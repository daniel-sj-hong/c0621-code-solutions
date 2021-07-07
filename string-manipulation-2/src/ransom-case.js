/* exported ransomCase */
function ransomCase(string) {
  var container = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      container += string[i].toLowerCase();
    } else {
      container += string[i].toUpperCase();
    }
  }
  return container;
}

// input - any string
// output - the string but every other word is capitalized
