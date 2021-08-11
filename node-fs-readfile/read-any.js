const fs = require('fs');

const test = process.argv[2];

fs.readFile('./' + test, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
