/* exported getWords */
function getWords(string) {
  var split = string.split(' ');
  if (string === '') {
    return [];
  }
  return split;
}
