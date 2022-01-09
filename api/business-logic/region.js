const regionStore = require("../models/region");

const regionManager = {
   getAllRegions: async () => {
      const allRegions = await regionStore.findAll();
      return allRegions;
   },
};

module.exports = regionManager;
