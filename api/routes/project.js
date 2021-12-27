const express = require("express");
const projectController = require("../controllers/project");
const projectManager = require ("../business-logic/project");

const projectRoutes = express.Router();

projectRoutes.get("/", projectController.get);
projectRoutes.post("/", projectController.post);
projectRoutes.get("/:projectId", projectController.getProjectById)


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
