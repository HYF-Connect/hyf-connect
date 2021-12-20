const Type = require("../../models/type.js");

const createType = async () => {
  const type = await Type.bulkCreate([
    { TypeID: 1, Title: "Student" },
    { TypeID: 2, Title: "Coach" },
    { TypeID: 3, Title: "Alumni" },
    { TypeID: 4, Title: "HYF Employee" },
  ]);
  return type;
};
module.exports = createType;
