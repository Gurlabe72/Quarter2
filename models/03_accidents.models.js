const accidentsQuery = require('../queries/03_accidents.query')



const getAllAccidents = () => {
  accidents = accidentsQuery.getAllAccidents()

  return accidents.then(result => {
    return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
};

const fetchAccidents = () => {
    accidents = accidentsQuery.fetchAccidents()

    return accidents.then(result => {
        return result.length < 1
        ? { error: 'error retreiving ', status: 404 }
        : result
    })
};

const createAccident = () => {
  accidents = accidentsQuery.createAccident()

  return accidents.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
} ;

const updateAccident = () => {
  accidents = accidentsQuery.updateAccident()

  return accidents.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
};

const deleteAccident = () => {
  accidents = accidentQuery.deleteAccident()

  return hazards.then(result => {
    return result.length < 1
    ? { error: 'error retreiving', status: 404 }
    : result
})
};






// module.exports = {
//   getAllAccidents, fetchAccidents, createAccident, updateAccident, deleteAccident
// }  
