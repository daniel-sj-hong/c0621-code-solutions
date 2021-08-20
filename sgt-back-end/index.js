const pg = require('pg');
const express = require('express');
const app = express();

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const JSONMiddleware = express.json();
app.use(JSONMiddleware);

app.get('/api/grades', (req, res) => {
  const sql = `
    select *
      from "grades";
  `;
  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const sql = `
  insert into "grades" ("name", "course", "score")
  values($1, $2, $3)
  returning *;
  `;
  if (!(req.body.name) || !(req.body.course) || !(req.body.score)) {
    res.status(400).json({
      error: 'name, course, and score are required fields'
    });
    return;
  }
  if (req.body.score < 1 || req.body.score > 100) {
    res.status(400).json({
      error: 'score needs to be between 1 and 100'
    });
    return;
  }
  const params = [req.body.name, req.body.course, req.body.score];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows;
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:id', (req, res) => {
  const sql = `
  update "grades"
     set "name" = $1,
         "course" = $2,
         "score" = $3
   where "gradeId" = $4
   returning *;
  `;
  const id = req.params.id;
  const params = [req.body.name, req.body.course, req.body.score, id];
  const parse = parseFloat(id);
  if (parse < 1 || !Number.isInteger(parse)) {
    res.status(400).json({
      error: `${parse} is not a valid id.`
    });
    return;
  }
  if (!(req.body.name) || !(req.body.course) || !(req.body.score)) {
    res.status(400).json({
      error: 'name, course, and score are required fields.'
    });
    return;
  }
  db.query(sql, params)
    .then(result => {
      const grade = result.rows;
      if (grade.length === 0) {
        res.status(404).json({
          error: `${parse} is not an existing id.`
        });
        return;
      }
      res.json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:id', (req, res) => {
  const sql = `
  delete from "grades"
        where "gradeId" = $1
    returning *;
  `;
  const id = req.params.id;
  const parse = parseFloat(id);
  if (parse < 1 || !Number.isInteger(parse)) {
    res.status(400).json({
      error: `${parse} is not a valid id.`
    });
    return;
  }
  db.query(sql, [id])
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `${parse} is not an existing id.`
        });
        return;
      }
      res.status(204).send();
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
