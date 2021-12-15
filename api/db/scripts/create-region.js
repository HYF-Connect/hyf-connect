const Region = require('../../models/region.js');

const createRegion = async ()=>{
    try {
        return await Region.bulkCreate([
        {RegionID: 1, Name:'Brussels'},
        {RegionID: 2, Name:'Antwerp'},
        {RegionID: 3, Name:'Flemish Brabant'},
        {RegionID: 4, Name:'West Flanders'},
        {RegionID: 5, Name:'East Flanders'},
        {RegionID: 6, Name:'Liège'},
        {RegionID: 7, Name:'Hainaut'},
        {RegionID: 8, Name:'Limburg'},
        {RegionID: 9, Name:'Luxembourg'},
        {RegionID: 10, Name:'Namur'},
        {RegionID: 11, Name:'Walloon Brabant'},
    ]);
    } catch (error) {
        console.log(error);
    } 
};

createRegion();


