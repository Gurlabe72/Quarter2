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
//=================================CREATE=================================/
const createAccident = (accidentInfo) => {
  accidents = accidentsQuery.createAccident(accidentInfo)

  return accidents.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
} ;
//==========================DELETE==========================//
const destroyAccident = (id) => {
  const accidents = accidentsQuery.destroyAccident(id);
  return accidents.then(result => {
      return result.length < 1 ?
      { error: 'error deleting', status: 400 } :
      result
  });
}
//==========================UPDATE==========================//
const updateAccident = (id, accidentInfo) => {
  const accidents = accidentsQuery.updateAccident(id, accidentInfo);
  return accidents.then(result => {
      return result.length < 1 ?
      { error: 'error updating accident', status: 400 } :
      result
  })
}

 module.exports = {
fetchAccidents,
getAccident,
createAccident,
destroyAccident
}  
