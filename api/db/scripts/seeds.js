const createNationality = require("./create-nationality");
const createLanguages = require("./create-language");
const createType = require("./create-type");
const createRegion = require("./create-region");
const createSkills = require("./create-skill");
const createClass = require("./create-class");
const createUsers = require("./create-user");
const createUserType = require("./create-user-type");
const createUserLanguages = require("./create-user-language");
const createUserSkill = require("./create-user-skill");
const createProject = require("./create-project");
const createUserProject = require("./create-user-project");
const createProjectClass = require("./create-project-class");
const createProjectSkill = require("./create-project-skill");

const seeds = async () => {
  await createNationality();
  await createLanguages();
  await createType();
  await createRegion();
  await createSkills();
  await createClass();
  await createUsers();
  await createUserType();
  await createUserLanguages();
  await createUserSkill();
  await createProject();
  await createUserProject();
  await createProjectClass();
  await createProjectSkill();
};

seeds();
