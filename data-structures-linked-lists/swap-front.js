/* exported swapFront */

function swapFront(list) {
  if (list.next) {
    const node = list.next;
    list.next = list.next.next;
    node.next = list;
    list = node;
  }
  return list;
}
