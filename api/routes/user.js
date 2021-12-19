const express = require("express");
const userController = require("../controllers/user");
const userValidator = require("../middleware/validate-user");

const userRoutes = express.Router();

userRoutes.get("/", userController.get);
userRoutes.post("/register", userValidator);
userRoutes.post("/register", userController.post);

module.exports = userRoutes;
