const accidentsQuery = require('../queries/03_accidents.query')

const fetchAccidents = () => {
  let accidents = accidentsQuery.fetchAccidents()

  return accidents.then(result => {
      return result.length < 1
      ? { error: 'error retreiving accidents', status: 404 }
      : result
  })``
};

// const getAccident= () => {
//   hazards = hazardsQuery.getAccident()

//   return hazards.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving ', status: 404 }
//       : result
//   }) 
// }

// const createAccident = () => {
//   accidents = accidentsQuery.createAccident()

//   return accidents.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })
// } ;

// const updateAccident = () => {
//   accidents = accidentsQuery.updateAccident()

//   return accidents.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })
// };

// const deleteAccident = () => {
//   accidents = accidentQuery.deleteAccident()

//   return hazards.then(result => {
//     return result.length < 1
//     ? { error: 'error retreiving', status: 404 }
//     : result
// })
// };






 module.exports = {
fetchAccidents
//getAccident
//createAccident, 
//updateAccident, 
//deleteAccident
}  
