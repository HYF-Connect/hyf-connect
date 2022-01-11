const express = require("express");
const classController = require("../controllers/class");

const classRoutes = express.Router();

classRoutes.get("/", classController.getAll);

module.exports = classRoutes;
