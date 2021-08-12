const fs = require('fs');

const thingy = process.argv[2];

fs.writeFile('note.txt', thingy + '\n', err => {
  if (err) throw err;
});
