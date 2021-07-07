var $modal = document.querySelector('.modal-container');
var $open = document.querySelector('.open-button');
var $noButton = document.querySelector('.no-button');
var modalOpen = false;

$open.addEventListener('click', handleOpen);
$noButton.addEventListener('click', handleClose);

function handleOpen(event) {
  if (modalOpen === false) {
    $modal.className = 'modal-container';
    modalOpen = true;
  }
}

function handleClose(event) {
  if (modalOpen === true) {
    $modal.className = 'hidden';
    modalOpen = false;
  }
}
