/* exported take2nd */

function take2nd(queue) {
  if (queue.peek() !== undefined) {
    const front = queue.dequeue();
    queue.enqueue(front);
    const newQueue = queue.peek();
    queue.dequeue();
    return newQueue;
  }
}
