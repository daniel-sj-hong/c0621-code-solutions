/* exported isPalindromic */
function isPalindromic(string) {
  let reverseString = '';
  let removeSpace = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      removeSpace += string[i];
    }
  }
  for (let j = removeSpace.length - 1; j >= 0; j--) {
    reverseString += removeSpace[j];
  }
  return reverseString === removeSpace;
}
