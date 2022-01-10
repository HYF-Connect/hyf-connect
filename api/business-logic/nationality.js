const nationalityStore = require("../models/nationality");

const nationalityManager = {
   getAllNationalities: async () => {
      const allNationalities = await nationalityStore.findAll();
      return allNationalities;
   },
};

module.exports = nationalityManager;
