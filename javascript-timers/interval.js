var $header = document.querySelector('h1');
var counter = 4;
var id = setInterval(countDown, 1000);

function countDown() {
  if (counter > 1) {
    counter--;
    $header.textContent = counter;
  } else {
    $header.textContent = 'eternal pain and suffering. what is life';
    clearInterval(id);
  }
}
