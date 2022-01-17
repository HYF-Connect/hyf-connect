const Skill = require("../../models/skill.js");

const createSkills = async () => {
   return await Skill.bulkCreate([
      { Name: "HTML" },
      { Name: "CSS" },
      { Name: "UI/UX" },
      { Name: "JavaScript" },
      { Name: "Node.js" },
      { Name: "React" },
      { Name: "Python" },
      { Name: "MongoDB" },
      { Name: "SQL" },
      { Name: "PHP" },
      { Name: "Java" },
      { Name: "Git" },
   ]);
};

module.exports = createSkills;
