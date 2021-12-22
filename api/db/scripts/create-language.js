const Language = require("../../models/language.js");
const createClass = require("./create-class.js");

const createLanguages = async () => {
  const languages = await Language.bulkCreate([
    { LanguageID: 1, Language: "English" },
    { LanguageID: 2, Language: "French" },
    { LanguageID: 3, Language: "German" },
    { LanguageID: 4, Language: "Dutch" },
    { LanguageID: 5, Language: "Spanish" },
    { LanguageID: 6, Language: "Arabic" },
    { LanguageID: 7, Language: "Italian" },
    { LanguageID: 8, Language: "Portuguese" },
    { LanguageID: 9, Language: "Russian" },
    { LanguageID: 10, Language: "Chinese" },
  ]);
  return languages;
};

module.exports = createLanguages;
