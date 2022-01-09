const Nationality = require("../../models/nationality.js");

const createNationality = async () => {
   const countries = await Nationality.bulkCreate([
      { Country: "Belgium" },
      { Country: "Palestine" },
      { Country: "Venezuela" },
      { Country: "Peru" },
      { Country: "Indonesia" },
      { Country: "El Salvador" },
      { Country: "Indonesia" },
      { Country: "Eritrea" },
      { Country: "Russia" },
      { Country: "Brazil" },
   ]);
   return countries;
};

module.exports = createNationality;
