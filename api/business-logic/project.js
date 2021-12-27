const ProjectStore = require("../models/project");

const projectManager = {
createProject: async ({ Title, Description, GithubURL, WebsiteURL, Thumbnail }) => {
const newProject = { Title, Description, GithubURL, WebsiteURL, Thumbnail };
await ProjectStore.create(newProject);
return newProject;
},
getProjectById: async(projectId) =>{
const project = await ProjectStore.findByPk(projectId);
//findOne({ where: { ProjectID: projectId } });

if (!project) {
throw new Error(`Could not find a project with id ${projectId}!`);
    } 
    return project;
},
getAllProjects: async () => {
const allProjects = await ProjectStore.findAll();
return allProjects;
}

};

module.exports = projectManager;

