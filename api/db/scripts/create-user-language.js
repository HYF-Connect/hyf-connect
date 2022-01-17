const userLanguage = require("../../models/user-language");

const createUserLanguages = async () => {
   const userLang = await userLanguage.bulkCreate([]);
   return userLang;
};
module.exports = createUserLanguages;
