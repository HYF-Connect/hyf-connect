const Class = require("../../models/class.js");

const createClass = async () => {
   const Classes = await Class.bulkCreate([
      { ClassID: 1, Name: "Class 11-12" },
      { ClassID: 2, Name: "Class 13-14" },
      { ClassID: 3, Name: "Class 15" },
      { ClassID: 4, Name: "Lab Antwerp 1" },
   ]);
   return Classes;
};

module.exports = createClass;
