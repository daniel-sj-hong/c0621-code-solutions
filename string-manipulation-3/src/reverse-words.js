/* exported reverseWords */
function reverseWords(string) {
  var reversedString = '';
  var reversedWord = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      reversedWord = string[i] + reversedWord;
    } else {
      reversedString += reversedWord + ' ';
      reversedWord = '';
    }
  }
  reversedString += reversedWord;
  return reversedString;
}

// function reverseWords(string) {
//   const split = string.split(' ');
//   console.log(split);
//   const arr = [];

//   for (let i = 0; i < split.length; i++) {
//     const word = split[i];
//     let reversedString = ''; // llA
//     console.log(reversedString);
//     for (let j = word.length - 1; j >= 0; j--) { // j = 0
//       const letter = word[j];
//       reversedString += split[i];
//     }
//     arr.push(reversedString);
//   }
//   return arr.join(' ');
// }

//   loop through the split array and get each word
//     loop through the word and start at the end of the word and decrement
//     add each letter to reversedString
//   push reversedString to arr
