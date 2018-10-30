const hazardsQuery = require('../queries/02_hazards.query')
//=================================FETCH=================================/
const fetchHazards = () => {
    hazards = hazardsQuery.fetchHazards()

    return hazards.then(result => {
        return result.length < 1
        ? { error: 'error retreiving hazards ', status: 404 }
        : result
    })
};
//=================================GET=================================//
const getHazard= (id) => {
    let hazards = hazardsQuery.getHazard(id)
   
     return hazards.then(result => {
         return result.length < 1
         ? { error: 'error retreiving ', status: 404 }
         : result
     }) 
   };
//=================================CREATE=================================/
const createHazard = (hazardInfo) => {
  hazards = hazardsQuery.createHazard(hazardInfo)

  return hazards.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
} ;
//==========================DELETE==========================//
const destroyHazard = (id) => {
    const hazards = hazardsQuery.destroyHazard(id);
    return drivers.then(result => {
        return result.length < 1 ?
        { error: 'error deleting', status: 400 } :
        result
    });
}
//==========================UPDATE==========================//
const updateHazard = (id, hazardInfo) => {
    const hazards = hazardsQuery.updatehazard(id, hazardInfo);
    return hazards.then(result => {
        return result.length < 1 ?
        { error: 'error updating hazard', status: 400 } :
        result
    })
}



module.exports = { 
   fetchHazards,
   getHazard,
   createHazard,
   destroyHazard,
   updateHazard 
}  