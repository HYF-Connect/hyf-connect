const express = require("express");
const userController = require("../controllers/user");

const userRoutes = express.Router();

userRoutes.get("/", userController.getAll);
userRoutes.post("/register", userController.postRegister);
userRoutes.post("/profile/", userController.postUserProfile);
userRoutes.get("/:userId", userController.getById);

module.exports = userRoutes;
