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
    let hazardss = hazardssQuery.getHazard(id)
   
     return hazards.then(result => {
         return result.length < 1
         ? { error: 'error retreiving ', status: 404 }
         : result
     }) 
   };
//=================================CREATE=================================/
// const createHazard = () => {
//   hazards = hazardsQuery.createHazard()

//   return hazards.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })
// } ;




module.exports = { 
   fetchHazards,
   getHazard
//   createHazard, 
}  