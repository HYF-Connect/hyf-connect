const UserProject = require("../../models/user-project.js");

const createUserProject = async () => {
   const userProject = await UserProject.bulkCreate([
      { UserProjectID: 1, UserID: 3, ProjectID: 1 },
      { UserProjectID: 2, UserID: 2, ProjectID: 3 },
      { UserProjectID: 3, UserID: 1, ProjectID: 2 },
   ]);
   return userProject;
};

createUserProject();
