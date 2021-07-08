var $contactForm = document.querySelector('#contact-form');

$contactForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  var object = {
    email: $contactForm.elements.email.value,
    name: $contactForm.elements.name.value,
    message: $contactForm.elements.message.value
  };
  console.log('object:', object);
  $contactForm.reset();
}
