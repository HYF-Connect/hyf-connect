const projectClass = require("../../models/project-class.js");

const createProjectClass = async () => {
   const projectClasses = await projectClass.bulkCreate([]);
   return projectClasses;
};

module.exports = createProjectClass;
