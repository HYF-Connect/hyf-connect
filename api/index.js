'use strict';

const fs = require('fs');
const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

const config = require('./config');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(
  morgan('combined', {
    stream: fs.createWriteStream(path.join(__dirname, 'access.log'), {
      flags: 'a',
    }),
  })
);

if (config.MODE === 'development') {
  app.use(morgan('dev'));
}

app.get('/', (req, res) => {
  res.send('API! go to `/api`');
});
app.use('/api', routes);

/* eslint-disable */
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).end();
});

app.listen(config.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(
      `listening at http://localhost:${config.PORT} (${config.MODE} mode)`
    );
  }
});
