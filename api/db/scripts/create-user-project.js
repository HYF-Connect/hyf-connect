const UserProject = require("../../models/user-project.js");

const createUserProject = async () => {
   const userProject = await UserProject.bulkCreate([]);
   return userProject;
};
module.exports = createUserProject;
