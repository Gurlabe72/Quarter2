const knex = require('./db')
const hazardsQuery = require('../queries/02_hazards.models')


const getAllHazards = () => {
  return knex('hazards')
}







const fetchHazards = () => {
  let hazards = hazardsQuery.fetchHazards()
};







const createHazard = () => {
  let hazards = hazardsQuery.createHazard()
  };







  const updateHazard = () => {
  let hazards = hazardsQuery.createHazard()
}







const deleteHazard = () => {
  let hazards = hazardsQuery.deleteDriver()
}
 
module.exports = {
  getAllHazards,
  fetchHazards,
  createHazard,
  updateHazard,
  deleteHazard
}