/* exported pick */
function pick(source, keys) {
  var object = {};
  var sourceKeys = Object.keys(source);
  sourceKeys.forEach(function (sourceKey) {
    if (keys.includes(sourceKey) && source[sourceKey] !== undefined) {
      object[sourceKey] = source[sourceKey];
    }
  });
  return object;
}
