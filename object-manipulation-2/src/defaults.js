/* exported defaults */
function defaults(target, source) {
  for (const props in source) {
    if (!(props in target)) {
      target[props] = source[props];
    }
  }
}

// for-in loop to get the properties in source so we can shove the properties into target
// we have to check if the property in source already exists in target
// if it doesn't, then we shove the property into target
