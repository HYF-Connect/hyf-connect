const ProjectStore = require("../models/project");

const projectManager = {
createProject: async ({ Title, Description,GithubURL,WebsiteURL,Thumbnail}) => {
const newProject = { Title, Description,GithubURL,WebsiteURL,Thumbnail };
await ProjectStore.create(newProject);
return newProject;
},
getAllProjects: async () => {
const allProjects = await ProjectStore.findAll();
return allProjects;
},
getProjectbyId: async(projectId) =>{
const project = await ProjectStore.find(projectId);
if (!project) {
throw new Error(`Could not find channel with id ${projectId}!`);
    }
return project
}
};

module.exports = projectManager;

