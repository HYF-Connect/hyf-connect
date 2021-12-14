const Region = require('../../models/region.js');

const createRegion = async ()=>{
    return await Region.bulkCreate([
        {RegionID: 1, Name:'Brussels'},
        {RegionID: 2, Name:'East Flanders'},
        {RegionID: 3, Name:'West Flanders'},
        {RegionID: 4, Name:'Wallonia'}
    ]);
};

createRegion();