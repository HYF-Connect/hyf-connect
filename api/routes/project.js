const express = require("express");
const projectController = require("../controllers/project");
const projectManager = require("../business-logic/project");

const projectRoutes = express.Router();

projectRoutes.get("/", projectController.get);
projectRoutes.post("/", projectController.post);
projectRoutes.get("/:projectId/users", projectController.getAllProjectUsers);
projectRoutes.put("/:projectId/users", projectController.putProjectUsers);
projectRoutes.get("/:projectId", projectController.getProjectById);
projectRoutes.put("/:projectId", projectController.putProject);
projectRoutes.put(
   "/:projectId/thumbnail",
   projectController.putProjectThumbnail
);
projectRoutes.post("/:projectId/skill", projectController.postSkill);
projectRoutes.post("/:projectId/class", projectController.postClass);
projectRoutes.post("/:projectId/user", projectController.postUser);
projectRoutes.delete("/:projectId", projectController.deleteProject);
projectRoutes.delete(
   "/:projectId/skill/:skillId",
   projectController.deleteSkill
);
projectRoutes.delete(
   "/:projectId/class/:classId",
   projectController.deleteClass
);
projectRoutes.delete("/:projectId/user/:userId", projectController.deleteUser);

projectRoutes.use("/projects/:projectId", async (req, res, next) => {
   try {
      const title = await projectManager.getAllProjects(req.params.projectId);
      req.Title = title;
      next();
   } catch (error) {
      res.status(400).send({
         message: `${project} provided could not be found`,
      });
   }
});

module.exports = projectRoutes;
