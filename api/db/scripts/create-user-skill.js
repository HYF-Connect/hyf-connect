const UserSkill = require("../../models/user-skill.js");

const createUserSkill = async () => {
   const userSkill = await UserSkill.bulkCreate([]);

   return userSkill;
};
module.exports = createUserSkill;
