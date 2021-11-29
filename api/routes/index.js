'use strict';

const express = require('express');

const routes = express.Router();

// require routes files
const resourceRoutes = require('./resource');

// use them with this router
routes.use('/resource', resourceRoutes);

// export the routes
module.exports = routes;
