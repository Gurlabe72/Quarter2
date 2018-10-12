const knex = require('./db')
const driversQuery = require('../queries/02_hazards.models')


const getAllDrivers = () => {
  return knex('drivers')
}







const fetchDriver = () => {
  let drivers = driversQuery.fetchDriver()
};







const createDriver = () => {
  let drivers = driversQuery.createDriver()
  };







  const updateDriver = () => {
  let drivers = driversQuery.updateDriver()
}







const deleteDriver = () => {
  let drivers = driversQuery.deleteDriver()
}
 




module.exports = {
  getAllDrivers,
  fetchDriver,
  createDriver,
  updateDriver,
  deleteDriver
}