const knex = require('./db')
const accidentsQuery = require('../queries/02_hazards.models')


const getAllAccidents = () => {
  return knex('accidents')
}







const fetchAccidents = () => {
  let accidents = accidentsQuery.fetchAccidents()
};







const createAccident = () => {
  let accidents = accidentsQuery.createAccident()
  };







  const updateAccident = () => {
  let accidents = accidentsQuery.createAccident()
}







const deleteaccident = () => {
  let drivers = accidentsQuery.deleteAccident()
}
 











module.exports = {
  getAllAccidents,
  fetchAccidents,
  createAccident,
  updateAccident,
  deleteaccident
}