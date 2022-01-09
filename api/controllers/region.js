const regionManager = require("../business-logic/region");

const regionController = {
   getAll: async (req, res) => {
      try {
         const allRegions = await regionManager.getAllRegions();
         res.send(JSON.stringify(allRegions, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
};

module.exports = regionController;
