const fs = require('fs');

const randomNumber = Math.random();
const toString = randomNumber.toString();

fs.writeFile('random.txt', toString + '\n', err => {
  if (err) throw err;
});
