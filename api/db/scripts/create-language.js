const Language = require("../../models/language.js");

const createLanguages = async () => {
   const languages = await Language.bulkCreate([
      { Language: "English" },
      { Language: "French" },
      { Language: "German" },
      { Language: "Dutch" },
      { Language: "Spanish" },
      { Language: "Portuguese" },
      { Language: "Arabic" },
      { Language: "Italian" },
      { Language: "Russian" },
      { Language: "Chinese" },
   ]);
   return languages;
};

module.exports = createLanguages;
