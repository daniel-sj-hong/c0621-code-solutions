/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  }
  return lowerCase[0].toUpperCase() + lowerCase.slice(1);
}
