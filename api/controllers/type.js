const typeManager = require("../business-logic/type");

const typeController = {
   getAll: async (req, res) => {
      try {
         const allTypes = await typeManager.getAllTypes();
         res.send(JSON.stringify(allTypes, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
};

module.exports = typeController;
