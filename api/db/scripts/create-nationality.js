const Nationality = require("../../models/nationality.js");

const createNationality = async () => {
   const countries = await Nationality.bulkCreate([
      { NationalityID: 1, Country: "Belgium" },
      { NationalityID: 2, Country: "Palestine" },
      { NationalityID: 3, Country: "Venezuela" },
      { NationalityID: 4, Country: "Peru" },
      { NationalityID: 5, Country: "Indonesia" },
      { NationalityID: 6, Country: "El Salvador" },
      { NationalityID: 7, Country: "Indonesia" },
      { NationalityID: 8, Country: "Eritrea" },
      { NationalityID: 9, Country: "Russia" },
      { NationalityID: 10, Country: "Brazil" },
   ]);
   return countries;
};

module.exports = createNationality;
