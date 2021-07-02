/* exported isVowel */
function isVowel(character) {
  var container = character.toLowerCase();
  if (container === 'a' || container === 'e' || container === 'i' || container === 'o' || container === 'u') {
    return true;
  } else {
    return false;
  }
}
