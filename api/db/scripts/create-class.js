const Class = require("../../models/class.js");

const createClass = async () => {
   const Classes = await Class.bulkCreate([
      { Name: "Class 11-12" },
      { Name: "Class 13-14" },
      { Name: "Class 15" },
      { Name: "Lab Antwerp 1" },
   ]);
   return Classes;
};

module.exports = createClass;
