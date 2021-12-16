const UserType = require("../../models/user-type.js");

const createUserType = async () => {
   const userType = await UserType.bulkCreate([
      { UserTypeID: 1, UserID: 2, TypeID: 3 },
      { UserTypeID: 2, UserID: 3, TypeID: 1 },
   ]);
   return userType;
};
module.exports = createUserType;
