const express = require("express");
const skillController = require("../controllers/skill");

const skillRoutes = express.Router();

skillRoutes.get("/", skillController.getAll);

module.exports = skillRoutes;
