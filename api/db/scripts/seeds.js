const createNationality = require("./create-nationality");
const createLanguages = require("./create-language");
const createType = require("./create-type");
const createRegion = require("./create-region");
const createSkills = require("./create-skill");
const createClass = require("./create-class");
const createUsers = require("./create-user");
const createProject = require("./create-project");
const createUserProject = require("./create-user-project");
const createProjectClass = require("./create-project-class");

const seeds = async () => {
   await createNationality();
   await createLanguages();
   await createType();
   await createRegion();
   await createSkills();
   await createClass();
   await createUsers();
   await createProject();
   await createUserProject();
   await createProjectClass();
};

seeds();
