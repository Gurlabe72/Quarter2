const hazardsQuery = require('../queries/02_hazards.query')

const fetchHazards = () => {
    hazards = hazardsQuery.fetchHazards()

    return hazards.then(result => {
        return result.length < 1
        ? { error: 'error retreiving hazards ', status: 404 }
        : result
    })
};
// const getHazard = () => {
//     hazards = hazardsQuery.getHazard()

//     return hazards.then(result => {
//         return result.length < 1
//         ? { error: 'error retreiving ', status: 404 }
//         : result
//     }) 
// }
// const createHazard = () => {
//   hazards = hazardsQuery.createHazard()

//   return hazards.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })
// } ;

// const updateHazard = () => {
//   hazards = hazardsQuery.updateHazard()

//   return hazards.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })
// };

// const deleteHazard = () => {
//   hazards = deleteQuery.deleteHazard()

//   return hazards.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })



module.exports = { 
   fetchHazards
//   getHazard,
//   createHazard, 
//   updateHazard, 
//   deleteHazard
}  