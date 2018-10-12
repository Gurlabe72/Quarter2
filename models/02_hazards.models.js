const hazardsQuery = require('../queries/02_hazards.query')



const getAllHazards = () => {
  hazards = usersQuery.getAllHazards()

  return hazards.then(result => {
    return result.length < 1
      ? { error: 'error retreiving hazards', status: 404 }
      : result
  })
};

const fetchHazards = () => {
    hazards = hazardsQuery.fetchHazards()

    return hazards.then(result => {
        return result.length < 1
        ? { error: 'error retreiving ', status: 404 }
        : result
    })
};

const createHazard = () => {
  hazards = hazardsQuery.createHazard()

  return hazards.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
} ;

const updateHazard = () => {
  hazards = hazardsQuery.updateHazard()

  return hazards.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
};

const deleteHazard = () => {
  hazards = deleteQuery.deleteHazard()

  return hazards.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
};


module.exports = {
  getAllHazards, 
  fetchHazards, 
  createHazard, 
  updateHazard, 
  deleteHazard
}  