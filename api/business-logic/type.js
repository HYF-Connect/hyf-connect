const typeStore = require("../models/type");

const typeManager = {
   getAllTypes: async () => {
      const allTypes = await typeStore.findAll();
      return allTypes;
   },
};

module.exports = typeManager;
