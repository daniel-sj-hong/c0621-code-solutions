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

// make container to hold the string
// loop through the entire length of the string
// if the index of i is ever divisible by 2 with a remainder of 0, lowercase that letter
// if the index of i is not divisible by 2, uppercase that letter
// return the container
