/* exported truncate */
function truncate(length, string) {
  var container = '';
  if (string === '') {
    return '...';
  }
  for (var i = 0; i < length; i++) {
    if (string[i] === undefined) {
      break;
    }
    container += string[i];
  }
  container += '...';
  return container;
}

// create a container to hold the new string
// loop through the string parameter until it hits length
// if string[i] is ever equal to undefined because nothing's there, break out of the loop
// with each iteration of the loop add string[i] to the container
// container is always going to have a ... concatenated to the end of it
// if string is ever empty, just return a ...
