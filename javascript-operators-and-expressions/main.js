var width = 2;
var height = 3;
var area = width * height;

var bill = 5;
var payment = 10;
var change = payment - bill;

var quizzes = 3;
var midterm = 8;
var final = 10;
var grade = (quizzes + midterm + final) / 3;

var firstName = 'Daniel';
var lastName = 'Hong';
var fullName = firstName + ' ' + lastName;

var ph = 5;
var isAcidic = ph < 7;

var headCount = 10;
var isSparta = headCount === 300;

var motto = fullName + ' is the GOAT';

console.log('area', area);
console.log('typeof area', typeof area);
console.log('change', change);
console.log('typeof change', typeof change);
console.log('grade', grade);
console.log('typeof', typeof grade);
console.log('fullName', fullName);
console.log('typeof fullName', typeof fullName);
console.log('isAcidic', isAcidic);
console.log('typeof isAcidic', typeof isAcidic);
console.log('isSparta', isSparta);
console.log('typeof isSparta', typeof isSparta);
console.log('motto', motto);
console.log('typeof motto', typeof motto);
