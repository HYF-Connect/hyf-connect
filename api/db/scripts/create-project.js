const Project = require("../../models/project.js");

const createProject = async () => {
  const project = await Project.bulkCreate([
    {
      ProjectID: 1,
      Title: "HYF Connect",
      Description: "class 15 members created this project",
    },
    {
      ProjectID: 2,
      Title: "cats and dogs",
      Description: "class 14 members created this project",
    },
    {
      ProjectID: 3,
      Title: "test test",
      Description: "class 13 members created this project",
    },
  ]);
  return project;
};
module.exports = createProject;
