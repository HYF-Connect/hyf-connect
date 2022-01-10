const User = require("../../models/user.js");

const createUsers = async () => {
   return await User.bulkCreate([
      {
         FirstName: "Sami",
         LastName: "Sari",
         Email: "sami@gmail.com",
         Password: "1234",
      },
      {
         FirstName: "Rami",
         LastName: "Rari",
         Email: "Rami@gmail.com",
         Password: "4321",
      },
      {
         FirstName: "Yami",
         LastName: "Yari",
         Email: "yami@gmail.com",
         Password: "1234",
      },
   ]);
};
module.exports = createUsers;
