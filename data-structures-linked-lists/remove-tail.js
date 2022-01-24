/* exported removeTail */

function removeTail(list) {
  let node = list;
  if (list && !list.next) {
    return;
  }
  while (node.next.next !== null) {
    node = node.next;
  }
  node.next = null;
}
