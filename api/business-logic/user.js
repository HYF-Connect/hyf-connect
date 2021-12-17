const bcrypt = require("bcrypt");
const user = require("../models/user");

const saltRounds = 13;

const userManager = {
  createUser: async (email, password) => {
    const newUser = new User({ firstName, lastName, email, password });

    bcrypt.hash(newUser.password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      }
      newUser.password = hash;
      user.create(newUser);
    });
    return newUser;
  },
  getAllUsers: async () => {
    const allUsers = await user.findAll({
      attributes: ["UserID", "FirstName", "LastName", "Password", "Email"],
    });
    return allUsers;
  },
};

module.exports = userManager;
