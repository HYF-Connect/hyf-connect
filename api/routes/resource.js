'use strict';

const express = require('express');

const resourceRoutes = express.Router();

resourceRoutes.use((req, res, next) => {
  console.log('api!');
  next();
});

resourceRoutes.get('/', (req, res) => {
  res.send('hello');
});

module.exports = resourceRoutes;
