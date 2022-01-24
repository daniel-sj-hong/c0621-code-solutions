/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const str1 = firstString = firstString.split('').sort().join('');
  const str2 = secondString = secondString.split('').sort().join('');
  let removeSpace = '';
  let removeSpace2 = '';
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== ' ') {
      removeSpace += firstString[i];
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] !== ' ') {
      removeSpace2 += secondString[i];
    }
  }
  if (removeSpace === removeSpace2) {
    return true;
  } else {
    return false;
  }
}
