const express = require("express");
const userController = require("../controllers/user");

const userRoutes = express.Router();

userRoutes.get("/", userController.getAll);
userRoutes.get("/:userId/skill", userController.getSkills);
userRoutes.get("/:userId/language", userController.getLanguages);
userRoutes.get("/:userId/type", userController.getTypes);
userRoutes.get("/:userId/projects", userController.getProjects);
userRoutes.post("/register", userController.postRegister);
userRoutes.put("/:userId/profile", userController.putUserProfile);
userRoutes.put("/:userId/picture", userController.putUserPicture);
userRoutes.put("/:userId/skill", userController.putSkills);
userRoutes.put("/:userId/language", userController.putLanguages);
userRoutes.put("/:userId/type", userController.putTypes);
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
