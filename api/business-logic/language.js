const languageStore = require("../models/language");

const languageManager = {
   getAllLanguages: async () => {
      const allLanguages = await languageStore.findAll();
      return allLanguages;
   },
};

module.exports = languageManager;
