const classStore = require("../models/class");

const classManager = {
   getAllClasses: async () => {
      const allClasses = await classStore.findAll();
      return allClasses;
   },
};

module.exports = classManager;
