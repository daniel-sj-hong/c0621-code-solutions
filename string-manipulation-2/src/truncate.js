/* exported truncate */
function truncate(length, string) {
  var container = '';
  for (var i = 0; i < length; i++) {
    if (string[i] === undefined) {
      break;
    }
    container += string[i];
  }
  if (string === '') {
    return '...';
  }
  container += '...';
  return container;
}
