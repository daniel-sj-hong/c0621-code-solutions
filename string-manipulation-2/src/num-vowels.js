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

// create a counter = 0 that will increment for how many vowels there are in a string
// lowercase the entire string so that my conditional will check only lowercase
// if lowercase[i] ever has one of the of vowels, then increment the counter
// return the counter
