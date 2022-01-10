const UserType = require("../../models/user-type.js");

const createUserType = async () => {
   const userType = await UserType.bulkCreate([]);
   return userType;
};
module.exports = createUserType;
