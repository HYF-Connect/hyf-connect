const bcrypt = require("bcryptjs");
const userStore = require("../models/user.js");
const createToken = require("../utils/create-token.js");
// const autenticateLogin = require('../middleware/authenticate.js')

const saltRounds = 13;

const loginManager = {
  comparePassword: async (email, password) => {
    const registeredUserData = await userStore.findOne({
      where: { Email: email },
    });
    if (!registeredUserData) {
      throw new Error("Invalid email or password");
    }
    const match = await bcrypt.compare(
      password + email,
      registeredUserData.Password
    );
    if (!match) {
      throw new Error("Invalid email or password");
    }

    const token = createToken(registeredUserData);

    const userName = `${registeredUserData.FirstName} ${registeredUserData.LastName}`;

    return {
      token: token,
      userName,
      userId: registeredUserData.UserID,
      message: `Session created for ${userName}`,
      profilePicture: registeredUserData.ProfilePicture,
    };
  },
};

module.exports = loginManager;
