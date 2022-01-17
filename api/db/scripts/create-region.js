const Region = require("../../models/region.js");

const createRegion = async () => {
   return await Region.bulkCreate([
      { Name: "Brussels" },
      { Name: "Antwerp" },
      { Name: "Flemish Brabant" },
      { Name: "West Flanders" },
      { Name: "East Flanders" },
      { Name: "Liège" },
      { Name: "Hainaut" },
      { Name: "Limburg" },
      { Name: "Luxembourg" },
      { Name: "Namur" },
      { Name: "Walloon Brabant" },
   ]);
};

module.exports = createRegion;
