const express = require("express");
const nationalityController = require("../controllers/nationality");

const nationalityRoutes = express.Router();

nationalityRoutes.get("/", nationalityController.getAll);

module.exports = nationalityRoutes;
