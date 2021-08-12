var $bulb = document.querySelector('.bulb');
var $body = document.querySelector('body');
var bulbOn = true;

$bulb.addEventListener('click', handleClick);

function handleClick(event) {
  if (bulbOn === true) {
    $body.className = 'off-background';
    $bulb.className = 'off-bulb';
    bulbOn = false;
  } else {
    $body.className = 'on-background';
    $bulb.className = 'bulb';
    bulbOn = true;
  }
}
