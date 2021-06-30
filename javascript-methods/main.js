var one = 1;
var two = 2;
var three = 3;

var maximumValue = Math.max(one, two, three);
console.log('maximumValue:', maximumValue);

var heroes = [
  'ironman',
  'superman',
  'deadpool',
  'mom'
];

var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: 'LOTR',
    author: 'J.R.R.Tolkien'
  },
  {
    title: 'Harry Potter',
    author: 'JK Rowling'
  },
  {
    title: 'Green Eggs and Ham',
    author: 'Dr. Seuess'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Daniel Hong';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName', sayMyName);
