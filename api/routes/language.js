const express = require("express");
const languageController = require("../controllers/language");

const languageRoutes = express.Router();

languageRoutes.get("/", languageController.getAll);

module.exports = languageRoutes;
