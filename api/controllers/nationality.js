const nationalityManager = require("../business-logic/nationality");

const nationalityController = {
   getAll: async (req, res) => {
      try {
         const allNationalities =
            await nationalityManager.getAllNationalities();
         res.send(JSON.stringify(allNationalities, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
};

module.exports = nationalityController;
