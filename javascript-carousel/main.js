var $circleContainer = document.querySelector('.circle-container');
var $circles = document.querySelectorAll('.circle');
var $leftArrow = document.querySelector('.left-arrow');
var $rightArrow = document.querySelector('.right-arrow');
var counter = 1;
var timerId = setInterval(handleRight, 3000);
var $images = document.querySelectorAll('img');

$circleContainer.addEventListener('click', handleCircle);
$leftArrow.addEventListener('click', handleLeft);
$rightArrow.addEventListener('click', handleRight);

function handleCircle(event) {
  if (!event.target.matches('.circle')) {
    return;
  } else {
    for (var i = 0; i < $images.length; i++) {
      if (event.target === $circles[i]) {
        $circles[i].className = 'fas fa-circle circle';
      } else {
        $circles[i].className = 'far fa-circle circle';
      }
    }
  }

  var dataView = event.target.getAttribute('data-view');

  for (var j = 0; j < $images.length; j++) {
    if (dataView === $images[j].getAttribute('data-view')) {
      counter = j + 1;
      $images[j].className = 'view';
      refresh();
    } else {
      $images[j].className = 'hidden';
    }
  }
}

function handleLeft(event) {
  if (event.target.matches('.left-arrow')) {
    counter--;
    if (counter === 0) {
      counter = 5;
    }
    var nextImg = counter.toString();
    refresh();
    for (var i = 0; i < $images.length; i++) {
      if ($images[i].getAttribute('data-view') === nextImg) {
        $images[i].className = 'view';
        $circles[i].className = 'fas fa-circle circle';
      } else {
        $images[i].className = 'hidden';
        $circles[i].className = 'far fa-circle circle';
      }
    }
  }
}

function handleRight(event) {
  counter++;
  if (counter === 6) {
    counter = 1;
  }
  var nextImg = counter.toString();
  refresh();
  for (var i = 0; i < $images.length; i++) {
    if ($images[i].getAttribute('data-view') === nextImg) {
      $images[i].className = 'view';
      $circles[i].className = 'fas fa-circle circle';
    } else {
      $images[i].className = 'hidden';
      $circles[i].className = 'far fa-circle circle';
    }
  }
}

function refresh() {
  clearInterval(timerId);
  timerId = setInterval(handleRight, 3000);
}
