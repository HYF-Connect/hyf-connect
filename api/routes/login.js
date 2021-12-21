const express = require('express');
const loginController = require ('../controllers/login.js');
const loginRoutes = express.Router();

loginRoutes.post('/login', loginController.post);

module.exports = loginRoutes;