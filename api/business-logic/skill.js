const skillStore = require("../models/skill");

const skillManager = {
   getAllSkills: async () => {
      const allSkills = await skillStore.findAll();
      return allSkills;
   },
};

module.exports = skillManager;
