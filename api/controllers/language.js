const languageManager = require("../business-logic/language");

const languageController = {
   getAll: async (req, res) => {
      try {
         const allLanguages = await languageManager.getAllLanguages();
         res.send(JSON.stringify(allLanguages, null, 2));
      } catch (error) {
         res.status(500).send(error);
      }
   },
};

module.exports = languageController;
