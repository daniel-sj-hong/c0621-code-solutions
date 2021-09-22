/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return;
  }
  const top = stack.pop();
  const second = value;
  stack.push(second);
  stack.push(top);
  return stack;
}
