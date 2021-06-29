function convertMinutesToSeconds(minutes) {
  var result = minutes * 60;
  return console.log('convertMinutesToSeconds result:', result);
}

function greet(name) {
  var container = 'Hey, ' + name;
  return console.log('greet result:', container);
}

function getArea(width, height) {
  var product = width * height;
  return console.log('getArea result:', product);
}

function getFirstName(person) {
  return console.log('getFirstName result:', person.firstName);
}

function getLastElement(array) {
  return array.splice(array.length - 1);
}
