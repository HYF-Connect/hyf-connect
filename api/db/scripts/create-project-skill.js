const ProjectSkill = require("../../models/project-skill.js");

const createProjectSkill = async () => {
  const skillProject = await ProjectSkill.bulkCreate([
    { ProjectSkillID: 1, ProjectID: 1, SkillID: 1 },
    { ProjectSkillID: 2, ProjectID: 1, SkillID: 2 },
  ]);
  return skillProject;
};

module.exports = createProjectSkill;
