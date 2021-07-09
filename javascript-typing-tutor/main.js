var $keys = document.querySelectorAll('span');
var index = 0;
var $button = document.querySelector('button');
var correct = 0;
var keyStrokes = 0;
var $accuracy = document.querySelector('.accuracy');

document.addEventListener('keydown', handleKey);
$button.addEventListener('click', handleClick);

function handleKey(event) {
  keyStrokes++;
  if (index < $keys.length) {
    if (event.key === $keys[index].textContent) {
      correct++;
      $keys[index].className = 'green';
      index++;
      if (index < $keys.length) {
        $keys[index].className = 'border';
      }
      if (index === $keys.length) {
        $accuracy.className = 'accuracy';
        $button.className = '';
        $accuracy.textContent = 'Accuracy: ' + Math.floor(100 * (correct / keyStrokes)) + '%';
      }
    } else {
      $keys[index].className = 'red border';

    }
  }
}

function handleClick(event) {
  location.reload();
}
