const ProjectSkill = require("../../models/project-skill.js");

const createProjectSkill = async () => {
   const skillProject = await ProjectSkill.bulkCreate([]);
   return skillProject;
};

module.exports = createProjectSkill;
