/* exported removeNext */

function removeNext(list) {
  if (list.next) {
    if (list.next.next) {
      list.next = list.next.next;
    } else {
      list.next = null;
    }
  }
}
