const Project = require("../../models/project.js");

const createProject = async () => {
   const project = await Project.bulkCreate([
      {
         Title: "HYF Connect",
         Description: "class 15 members created this project",
      },
      {
         Title: "cats and dogs",
         Description: "class 14 members created this project",
      },
      {
         Title: "test test",
         Description: "class 13 members created this project",
      },
   ]);
   return project;
};
module.exports = createProject;
