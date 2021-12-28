const express = require("express");
const userController = require("../controllers/user-register");
const userProfileController = require("../controllers/user-profile");

const userRoutes = express.Router();

userRoutes.get("/", userController.get);
userRoutes.post("/register", userController.post);
userRoutes.post("/profile/:userId", userProfileController.post);
userRoutes.get("/:userId", userController.getUserById);

module.exports = userRoutes;
