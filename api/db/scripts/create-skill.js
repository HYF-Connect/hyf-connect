const Skill = require("../../models/skill.js");

const createSkills = async () => {
  return await Skill.bulkCreate([
    { SkillID: 1, Name: "HTML" },
    { SkillID: 2, Name: "CSS" },
    { SkillID: 3, Name: "UI/UX" },
    { SkillID: 4, Name: "JavaScript" },
    { SkillID: 5, Name: "Node.js" },
    { SkillID: 6, Name: "React" },
    { SkillID: 7, Name: "Python" },
    { SkillID: 8, Name: "MongoDB" },
    { SkillID: 9, Name: "SQL" },
    { SkillID: 10, Name: "PHP" },
    { SkillID: 11, Name: "Java" },
    { SkillID: 12, Name: "Git" },
  ]);
};

module.exports = createSkills;
