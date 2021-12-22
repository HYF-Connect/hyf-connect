const express = require('express');
const loginController = require ('../controllers/login.js');
const validateLogin = require ('../middleware/validate-login')

const loginRoutes = express.Router();


loginRoutes.post('/login',validateLogin);
loginRoutes.post('/login',loginController.post);


module.exports = loginRoutes;