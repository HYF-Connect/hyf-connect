const projectManager = require("../business-logic/project");

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
  postSkill: async (req, res) => {
    try {
      const { SkillID } = req.body;
      const projectID = req.params.projectId;
      const projectSkill = await projectManager.createProjectSkill({
        ProjectID: projectID,
        SkillID: SkillID,
      });
      res.status(200).json(projectSkill);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  postClass: async (req, res) => {
    try {
      const { ClassID } = req.body;
      const projectID = req.params.projectId;
      const projectClass = await projectManager.createProjectClass({
        ProjectID: projectID,
        ClassID: ClassID,
      });
      res.status(200).json(projectClass);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  postUser: async (req, res) => {
    try {
      const { UserID } = req.body;
      const projectID = req.params.projectId;
      const userProject = await projectManager.createUserProject({
        ProjectID: projectID,
        UserID: UserID,
      });
      res.status(200).json(userProject);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  putProject: async (req, res) => {
    try {
      const {
        Title,
        Description,
        GithubURL,
        WebsiteURL,
        Thumbnail,
        User,
        Class,
        Skill,
      } = req.body;
      const projectId = req.params.projectId;
      const project = await projectManager.updateProject({
        ProjectID: projectId,
        Title,
        Description,
        GithubURL,
        WebsiteURL,
        Thumbnail,
        UserID: User,
        ClassID: Class,
        SkillID: Skill,
      });
      res
        .status(200)
        .json(
          `Congratulation ${project.Title}, has been successfully updated!`
        );
    } catch (error) {
      res.status(400).json({
        message: error.message,
      });
    }
  },
  deleteProject: async (req, res) => {
    try {
      const { projectId } = req.params;
      await projectManager.deleteProject({
        ProjectID: projectId,
      });
      res.status(200).json({
        message: `project with id ${projectId} was successfully deleted!`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  deleteSkill: async (req, res) => {
    try {
      const { skillId, projectId } = req.params;
      await projectManager.deleteProjectSkill({
        ProjectID: projectId,
        SkillID: skillId,
      });
      res.status(200).json({
        message: `Skill with id ${skillId} was successfully deleted!`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
  deleteClass: async (req, res) => {
    try {
      const { classId, projectId } = req.params;
      await projectManager.deleteProjectClass({
        ProjectID: projectId,
        ClassID: classId,
      });
      res.status(200).json({
        message: `Class with id ${classId} was successfully deleted!`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { userId, projectId } = req.params;
      await projectManager.deleteUserProject({
        ProjectID: projectId,
        UserID: userId,
      });
      res.status(200).json({
        message: `User with id ${userId} was successfully deleted!`,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = projectController;
