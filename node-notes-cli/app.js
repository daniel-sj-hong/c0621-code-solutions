const data = require('./data.json');
const fs = require('fs');
const processValue2 = process.argv[2];
const processValue3 = process.argv[3];

if (processValue2 === 'read') {
  for (const prop in data.notes) {
    console.log(prop + ': ' + data.notes[prop]);
  }
}

if (processValue2 === 'create') {
  const nextId = data.nextId;
  data.notes[nextId] = processValue3;
  data.nextId++;
}

if (processValue2 === 'delete') {
  delete data.notes[processValue3];
}

if (processValue2 === 'update') {
  data.notes[processValue3] = process.argv[4];
}

fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
  if (err) throw err;
});
