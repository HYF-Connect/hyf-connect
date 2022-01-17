const Type = require("../../models/type.js");

const createType = async () => {
   const type = await Type.bulkCreate([
      { Title: "Student" },
      { Title: "Coach" },
      { Title: "Alumni" },
      { Title: "HYF Employee" },
   ]);
   return type;
};
module.exports = createType;
