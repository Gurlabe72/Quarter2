const accidentsQuery = require('../queries/03_accidents.query')
//=================================FETCH=================================/
const fetchAccidents = () => {
  let accidents = accidentsQuery.fetchAccidents()

  return accidents.then(result => {
      return result.length < 1
      ? { error: 'error retreiving accidents', status: 404 }
      : result
  })
};
//=================================GET=================================/
const getAccident= (id) => {
  hazards = hazardsQuery.getAccident(id)

  return accidents.then(result => {
      return result.length < 1
      ? { error: 'error retreiving ', status: 404 }
      : result
  }) 
}
//=================================UPDATE=================================/
const createAccident = (accidentInfo) => {
  accidents = accidentsQuery.createAccident(accidentInfo)

  return accidents.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
} ;


 module.exports = {
fetchAccidents,
getAccident,
createAccident
}  
