/* exported postpone */

function postpone(queue) {
  if (queue.peek() !== undefined) {
    const front = queue.dequeue();
    const back = queue.enqueue(front);
    return back;
  }
}
