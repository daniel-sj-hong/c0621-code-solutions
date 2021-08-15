/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  }
  return lowerCase[0].toUpperCase() + lowerCase.slice(1);
}

// get the word and turn it all into lowercase and put it into a variable
// get just the first index of the variable and upper case it and slice the rest of the string and concatenate it
// if the word is every equal to 'javascript' after the word's been all lowercased, return 'JavaScript'
