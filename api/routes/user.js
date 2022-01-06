const express = require("express");
const userController = require("../controllers/user");

const userRoutes = express.Router();

userRoutes.get("/", userController.getAll);
userRoutes.post("/register", userController.postRegister);
userRoutes.put("/:userId/profile", userController.putUserProfile);
userRoutes.put("/:userId/skill", userController.putSkill);
userRoutes.put("/:userId/language", userController.putLanguage);
userRoutes.put("/:userId/type", userController.putType);
userRoutes.post("/:userId/skill", userController.postSkill);
userRoutes.post("/:userId/language", userController.postLanguage);
userRoutes.post("/:userId/type", userController.postType);
userRoutes.delete("/:userId/profile", userController.deleteUserProfile);
userRoutes.delete("/:userId/skill/:skillId", userController.deleteSkill);
userRoutes.delete(
   "/:userId/language/:languageId",
   userController.deleteLanguage
);
userRoutes.delete("/:userId/type/:typeId", userController.deleteType);
userRoutes.get("/:userId", userController.getById);

module.exports = userRoutes;
