const userLanguage = require("../../models/user-language");

const createUserLanguages = async () => {
  const userLang = await userLanguage.bulkCreate([
    {
      UserID: 1,
      LanguageID: 2,
      Level: 4,
    },
    {
      UserID: 1,
      LanguageID: 3,
      Level: 2,
    },
  ]);
  return userLang;
};
module.exports = createUserLanguages;
