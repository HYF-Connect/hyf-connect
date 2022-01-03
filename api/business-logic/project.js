const ProjectStore = require("../models/project");
const ProjectSkillStore = require("../models/project-skill.js");
const ProjectClassStore = require("../models/project-class.js");
const UserProjectStore = require("../models/user-project.js");

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
    await ProjectStore.create(newProject);
    return newProject;
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
    const createdUserProject = await UserProjectStore.create({
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
    const updatedProfile = await projectById.update({
      Title,
      Description,
      GithubURL,
      WebsiteURL,
      Thumbnail,
      UserID: User,
      ClassID: Class,
      SkillID: Skill,
    });
    return updatedProfile;
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
    await ProjectSkillStore.destroy({
      where: { ProjectID: ProjectID, ClassID: ClassID },
    });
    return true;
  },
  deleteUserProject: async ({ UserID, ProjectID }) => {
    await UserProjectStore.destroy({
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
};

module.exports = projectManager;
