const classManager = require("../business-logic/class");

const classController = {
   getAll: async (req, res) => {
      try {
         const allClasses = await classManager.getAllClasses();
         res.send(JSON.stringify(allClasses, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
};

module.exports = classController;
