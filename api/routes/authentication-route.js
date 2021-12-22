const express = require('express');
const authentication = require ('../middleware/authenticate');
const AuthRoutes = express.Router();


AuthRoutes.get('/auth',authentication);


module.exports = AuthRoutes;