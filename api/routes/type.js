const express = require("express");
const typeController = require("../controllers/type");

const typeRoutes = express.Router();

typeRoutes.get("/", typeController.getAll);

module.exports = typeRoutes;
