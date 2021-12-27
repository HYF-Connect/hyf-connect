const projectManager = require("../business-logic/project");
const ProjectStore = require("../models/project");

const projectController = {
get: async (req, res) => {
try {
const allProjects = await projectManager.getAllProjects();
res.send(JSON.stringify(allProjects, null, 2));
} catch (error) {
res.status(500).send(error);
}
},
getProjectById: async (req, res) => {
try {
const projectId = req.params.projectId;

const project = await projectManager.getProjectById(projectId);

res.send(JSON.stringify(project));
} catch (error) {
res.status(500).send(error.message);
}
},

post: async (req, res) => {
try {
const { Title, Description } = req.body;
if (!Title || !Description ) {
return res.status(400).json({
message:
"Please, enter the project's title and description",
});
}


const projectAlreadyExists = await ProjectStore.findOne ({ where: { ProjectID }});
if (projectAlreadyExists) {
return res
.status(409)
.json({ message: "This project title is already being used" });
}

const project = await projectManager.createProject({
Title,
Description,
});
// console.log(project);
res.status(200).json(
`Congratulation ${project.Title}, is created!`
);
} catch (error) {
console.log(error);
res.status(500).json({ message: error.message });
}
},
};

module.exports = projectController;
