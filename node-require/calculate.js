const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const parseOne = parseInt(process.argv[2]);
const parseTwo = parseInt(process.argv[4]);

if (process.argv[3] === 'plus') {
  console.log('result:', add(parseOne, parseTwo));
}

if (process.argv[3] === 'minus') {
  console.log('result:', subtract(parseOne, parseTwo));
}

if (process.argv[3] === 'times') {
  console.log('result:', multiply(parseOne, parseTwo));
}

if (process.argv[3] === 'over') {
  console.log('result:', divide(parseOne, parseTwo));
}
