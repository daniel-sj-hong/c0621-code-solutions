/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported append */

function append(list, value) {
  let node = list;
  while (node.next !== null) {
    node = node.next;
  }
  const newNode = new LinkedList(value);
  node.next = newNode;
  return list;
}
