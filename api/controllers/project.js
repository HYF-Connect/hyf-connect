const projectManager = require("../business-logic/project");
const ProjectStore = require("../models/project");

const projectController = {
  get: async (req, res) => {
    try {
      const allProjects = await projectManager.getAllProjects();
      res.send(JSON.stringify(allProjects, null, 2));
    } catch (error) {
      res.status(500).send({ message: error });
    }
  },

  getProjectById: async (req, res) => {
    try {
      const projectId = req.params.projectId;
      const project = await projectManager.getProjectById(projectId);
      res.send(JSON.stringify(project));
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  post: async (req, res) => {
    try {
      const { Title, Description, GithubURL, WebsiteURL, Thumbnail } = req.body;
      if (!Title || !Description) {
        return res.status(400).json({
          message: "Please, enter the project's title and description",
        });
      }

      const project = await projectManager.createProject({
        Title,
        Description,
        GithubURL,
        WebsiteURL,
        Thumbnail,
      });
      res
        .status(200)
        .json({ message: `Congratulation ${project.Title}, is created!` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = projectController;
