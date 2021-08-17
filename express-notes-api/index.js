const express = require('express');
const data = require('./data.json');
const app = express();
const fs = require('fs');

const JSONMiddleware = express.json();
app.use(JSONMiddleware);

app.get('/api/notes', (req, res) => {
  const array = [];
  for (const prop in data.notes) {
    array.push(data.notes[prop]);
  }
  res.json(array);
});

app.get('/api/notes/:id', (req, res) => {
  const id = parseFloat(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
  } else {
    const entry = data.notes[id];
    if (entry === undefined) {
      res.status(404).json({
        error: `cannot find note with id ${id}`
      });
    }
    res.status(200).json(entry);
  }
});

app.post('/api/notes', (req, res) => {
  if (!(req.body.content)) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  const newNote = {
    id: data.nextId,
    content: req.body.content
  };
  data.notes[newNote.id] = newNote;
  data.nextId++;
  const JSONData = JSON.stringify(data, null, 2);
  fs.writeFile('data.json', JSONData, err => {
    if (err) {
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    } else {
      res.status(201).json(newNote);
    }
  });
});

app.delete('/api/notes/:id', (req, res) => {
  const id = parseFloat(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
  } else {
    delete data.notes[id];
    fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
      if (err) {
        res.status(500).json({
          error: 'An unexpected error occurred'
        });
      } else {
        res.status(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const id = parseFloat(req.params.id);
  if (!Number.isInteger(id) || id < 1) {
    res.status(400).json({
      error: 'id must be a positive integer'
    });
    return;
  }
  if (!(req.body.content)) {
    res.status(400).json({
      error: 'content is a required field'
    });
    return;
  }
  if (!data.notes[id]) {
    res.status(404).json({
      error: `cannot find note with id ${id}`
    });
    return;
  }
  data.notes[id].content = req.body.content;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) {
      res.status(500).json({
        error: 'An unexpected error occurred'
      });
    } else {
      res.json(data.notes[id]);
    }
  });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
