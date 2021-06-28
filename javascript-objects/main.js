var student = {
  firstName: 'Daniel',
  lastName: 'Hong',
  age: '28'
};

student.livesInIrvine = false;
student.previousOccupation = 'Pokemon Trainer';
var fullName = student.firstName + ' ' + student.lastName;

var vehicle = {
  make: 'Honda',
  model: 'Pilot',
  year: 2017
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

var pet = {
  name: 'poop',
  type: 'dinosaur'
};

delete pet.name;
delete pet.type;

console.log('fullName', fullName);
console.log('student.livesInIrvine', student.livesInIrvine);
console.log('student.previousOccupation', student.previousOccupation);
console.log('student', student);
console.log("vehicle['color']", vehicle['color']);
console.log("vehicle['isConvertible']", vehicle['isConvertible']);
console.log('vehicle', vehicle);
console.log('pet', pet);
