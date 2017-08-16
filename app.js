// dependency requirement for libraries
const express = require('express');
const db = require('./db');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
// create app instance for Express
const app = express();
// Connect templating engine to app instance
app.engine('mustache', mustacheExpress());
// Connect views folder to views name in app instance
app.set('views', './views');
// Connect view engine to mustache
app.set('view engine', 'mustache');
app.use(express.static('public'));
// Configure Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', (req, res, next) => {
  db.query('SELECT * FROM runner', (err, results) => {
    if (err) {
      return next(err)
    }
    res.render('index', {
      runners: results.rows
    });
  });
});

app.get('/addRunnner', (req, res) => {
  res.render('add')
});

app.post('/addRunnner', (req, res, next) => {
  let addRunnner = `INSERT INTO runner(division,sponser,name)
  VALUES( '${req.body.division}',
          '${req.body.sponser}',
          '${req.body.name}'
        )`;
  db.query(addRunner, (err) => {
    if (err) {
      return next(err)
    }
    res.redirect('/')
  });
});

app.get('/:id', (req, res, next) => {
  const id = req.params.id
  db.query(`SELECT * FROM runner WHERE bib_id = ${id}`, (err, results) => {
    if (err) {
      return next(err)
    }
    res.render('singleRunner', {runner:results.rows})
  });
});
app.listen(3000, () => {
  console.log('We have come alive');
});
