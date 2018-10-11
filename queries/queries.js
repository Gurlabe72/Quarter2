const knex = require('./db')
getAllHazards = () => {
  return knex('hazards')
}
module.exports = {
  getAllHazards 
}