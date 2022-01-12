const ProjectStore = require("../models/project");
const ProjectSkillStore = require("../models/project-skill.js");
const ProjectClassStore = require("../models/project-class.js");
const ProjectUserStore = require("../models/user-project.js");
const userManager = require("./user.js");

const projectManager = {
   createProject: async ({
      Title,
      Description,
      GithubURL,
      WebsiteURL,
      Thumbnail,
   }) => {
      const newProject = {
         Title,
         Description,
         GithubURL,
         WebsiteURL,
         Thumbnail,
      };
      return await ProjectStore.create(newProject);
   },
   createProjectSkill: async ({ ProjectID, SkillID }) => {
      const createdProjectSkill = await ProjectSkillStore.create({
         ProjectID: ProjectID,
         SkillID: SkillID,
      });
      return createdProjectSkill;
   },
   createProjectClass: async ({ ProjectID, ClassID }) => {
      const createdProjectClass = await ProjectClassStore.create({
         ProjectID,
         ClassID,
      });
      return createdProjectClass;
   },
   createUserProject: async ({ UserID, ProjectID }) => {
      const createdUserProject = await ProjectUserStore.create({
         UserID: UserID,
         ProjectID: ProjectID,
      });
      return createdUserProject;
   },
   updateProject: async ({
      ProjectID,
      Title,
      Description,
      GithubURL,
      WebsiteURL,
      Thumbnail,
      User,
      Class,
      Skill,
   }) => {
      const projectById = await ProjectStore.findOne({
         where: { ProjectID: ProjectID },
      });
      const updatedProject = await projectById.update({
         Title,
         Description,
         GithubURL,
         WebsiteURL,
         Thumbnail,
         UserID: User,
         ClassID: Class,
         SkillID: Skill,
      });
      return updatedProject;
   },
   updateProjectThumbnail: async (projectId, projectThumbnail) => {
      const projectById = await ProjectStore.findOne({
         where: { ProjectID: projectId },
      });
      const updatedThumbnail = await projectById.update({
         Thumbnail: projectThumbnail,
      });
      return updatedThumbnail;
   },
   updateProjectUsers: async (projectId, users) => {
      if (users.length !== 0) {
         await ProjectUserStore.destroy({
            where: { ProjectID: projectId },
         });
      }
      for (let user of users) {
         await ProjectUserStore.create({
            ProjectID: projectId,
            UserID: user.value,
         });
      }
   },
   deleteProject: async ({ ProjectID }) => {
      await ProjectStore.destroy({
         where: { ProjectID: ProjectID },
      });
      return true;
   },
   deleteProjectSkill: async ({ ProjectID, SkillID }) => {
      await ProjectSkillStore.destroy({
         where: { ProjectID: ProjectID, SkillID: SkillID },
      });
      return true;
   },
   deleteProjectClass: async ({ ProjectID, ClassID }) => {
      await ProjectClassStore.destroy({
         where: { ProjectID: ProjectID, ClassID: ClassID },
      });
      return true;
   },
   deleteUserProject: async ({ UserID, ProjectID }) => {
      await ProjectUserStore.destroy({
         where: { ProjectID: ProjectID, UserID: UserID },
      });
      return true;
   },
   getProjectById: async (projectId) => {
      const project = await ProjectStore.findByPk(projectId);
      return project;
   },
   getAllProjects: async () => {
      const allProjects = await ProjectStore.findAll();
      return allProjects;
   },
   getAllUsers: async (projectId) => {
      const allUsers = await ProjectUserStore.findAll({
         where: { ProjectID: projectId },
         attributes: ["UserID"],
      });
      const results = [];
      for (let user of allUsers) {
         results.push(await userManager.getUserById(user.UserID));
      }
      return results;
   },
};

module.exports = projectManager;
