const bcrypt = require("bcrypt");
const user = require("../models/user");

const saltRounds = 13;

const userManager = {
   createUser: async ({ FirstName, LastName, Email, Password }) => {
      const newUser = { FirstName, LastName, Email, Password };
      bcrypt.hash(newUser.Password + newUser.Email, saltRounds, (err, hash) => {
         if (err) {
            console.log(err);
         }
         const hashedPassword = (newUser.Password = hash);
         user.create({
            FirstName: FirstName,
            LastName: LastName,
            Password: hashedPassword,
            Email: Email,
         });
      });
      return newUser;
   },
   getAllUsers: async () => {
      const allUsers = await user.findAll();
      return allUsers;
   },
};

module.exports = userManager;
