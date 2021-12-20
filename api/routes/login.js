const express = require ('express');
const loginController = require ('../controllers/login');
const loginRoutes = express.Router();
loginRoutes.post('/', loginController.post);

module.exports = loginRoutes;