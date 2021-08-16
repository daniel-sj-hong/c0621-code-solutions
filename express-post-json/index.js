const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
express.json();

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const prop in grades) {
    array.push(grades[prop]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).json(grades[nextId]);
  nextId++;
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
