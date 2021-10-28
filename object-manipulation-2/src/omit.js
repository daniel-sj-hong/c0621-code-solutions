/* exported omit */
function omit(source, keys) {
  var object = {};
  var sourceKeys = Object.keys(source);
  for (var i = 0; i < sourceKeys.length; i++) {
    if (!keys.includes(sourceKeys[i])) {
      object[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
  return object;
}
