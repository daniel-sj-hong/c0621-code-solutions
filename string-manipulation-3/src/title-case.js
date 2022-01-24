/* exported titleCase */

function titleCase(title) {
  const lowerCase = title.toLowerCase();
  const splitTitle = lowerCase.split(' ');
  const draft = [];
  const skipWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'and', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];

  for (let i = 0; i < splitTitle.length; i++) {
    if (skipWords.indexOf(splitTitle[i]) === -1 || i === 0 || splitTitle[i - 1].charAt(splitTitle[i - 1].length - 1) === ':') {
      if (splitTitle[i].includes('javascript')) {
        const JS = splitTitle[i].replace('javascript', 'JavaScript');
        splitTitle[i] = JS;
      }
      if (splitTitle[i] === 'api') {
        splitTitle[i] = 'API';
      }

      let restOfWord = '';
      let firstWordUpper = splitTitle[i].charAt(0).toUpperCase();
      for (let j = 1; j < splitTitle[i].length; j++) {
        if (splitTitle[i].charAt(j - 1) === '-') {
          restOfWord += splitTitle[i].charAt(j).toUpperCase();
        } else {
          restOfWord += splitTitle[i].charAt(j);
        }
      }

      firstWordUpper = firstWordUpper + restOfWord;
      draft.push(firstWordUpper);
    } else {
      draft.push(splitTitle[i]);
    }
  }

  const finalDraft = draft.join(' ');
  return finalDraft;
}

// lowercase the argument given
// split at every space character
// create an array variable to hold all the words
// create an array holding all the special case words
// create loop to go through every word that is in the split array
// check to see if word contains any of the special case words, if it does, capitalize it, if it doesn't capitalize
// JavaScript will always be 'JavaScript' and API will always be "API"
// create a variable to hold a capital word and another variable to hold the rest of the word
// join the two variables
// now join the array at spaces to create a title
