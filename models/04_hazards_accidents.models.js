const hazards_accidentsQuery = require('../queries/04_hazards_accidents.query')

const fetchHazards_Accidents = () => {
    hazards_accidents = hazards_accidentsQuery.fetchHazards_accidents()

    return hazards_accidents.then(result => {
        return result.length < 1
        ? { error: 'error retreiving hazards_accidents', status: 404 }
        : result
    })
};

// const getHazards_Acccidents= () => {
//   hazards = Hazards_AccidentsQuery.getAccident()

//   return Hazards_Accidents.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving ', status: 404 }
//       : result
//   }) 
// }

// const createHazards_Acccidents = () => {
//   Hazards_Accidents = Hazards_AccidentsQuery.createHazards_Acccidents()

//   return Hazards_Accidents.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })
// } ;

// const updateHazards_Acccidents = () => {
//   Hazards_Accidents = Hazards_AccidentsQuery.updateHazards_Acccidents()

//   return Hazards_Accidents.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })
// };

// const deleteHazards_Acccidents = () => {
//     Hazards_Accidents = Hazards_AccidentsQuery.deleteHazards_Acccidents()
  
//     return Hazards_Accidents.then(result => {
//         return result.length < 1
//         ? { error: 'error retreiving', status: 404 }
//         : result
//     })
 //};

module.exports = {
  fetchHazards_accidents
  // getHazards_Acccidents
  // createHazards_Acccidents, 
  // updateHazards_Acccidents, 
  // deleteHazards_Acccidents
}  