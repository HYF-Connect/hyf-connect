const express = require("express");
const regionController = require("../controllers/region");

const regionRoutes = express.Router();

regionRoutes.get("/", regionController.getAll);

module.exports = regionRoutes;
