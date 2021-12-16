const ProjectSkill = require("../../models/project-class.js");

const createProjectSkill = async () => {
   const skillProject = await ProjectSkill.bulkCreate([
      { ProjectSkillID: 1, SkillID: 1, ProjectID: 1 },
      { ProjectSkillID: 2, SkillID: 2, ProjectID: 1 },
   ]);
   return skillProject;
};
createProjectSkill();
