var $header = document.querySelector('h1');
var counter = 4;

setInterval(function () {
  if (counter > 1) {
    counter--;
    $header.textContent = counter;
  } else {
    $header.textContent = 'eternal pain and suffering. what is life';
    clearInterval();
  }
}, 1000);
