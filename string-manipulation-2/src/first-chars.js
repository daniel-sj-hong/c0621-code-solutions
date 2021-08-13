/* exported firstChars */
function firstChars(length, string) {
  var container = '';
  for (var i = 0; i < length; i++) {
    if (string[i] === undefined) {
      break;
    }
    container += string[i];
  }
  if (string === '') {
    return container;
  }
  return container;
}

// create container to hold the final string that will be returned
// create a loop that will stop at at length
// if string[i] is equal to undefined, then break out of the loop
// otherwise, add string[i] to container until it hits the length
// if string at[i] is ever and empty string, return the container
// return container
