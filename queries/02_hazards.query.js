const knex = require('./db')

const getHazard = () => {
  return knex('hazards')
}

const fetchHazards = () => {
  return knex('hazards')
}






 
module.exports = {
  getHazard,
  fetchHazards,
  // createHazard,
  // updateHazard,
  // deleteHazard
}