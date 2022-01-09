const skillManager = require("../business-logic/skill");

const skillController = {
   getAll: async (req, res) => {
      try {
         const allSkills = await skillManager.getAllSkills();
         res.send(JSON.stringify(allSkills, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
};

module.exports = skillController;
