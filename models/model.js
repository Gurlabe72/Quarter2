const hazardsQuery = require('../queries/queries')

const getAllHazards = () => {
  hazards = usersQuery.getAllHazards()

  return hazards.then(result => {
    return result.length < 1
      ? { error: 'error retreiving hazards', status: 404 }
      : result
  })
}

module.exports = {
  getAllHazards
}  