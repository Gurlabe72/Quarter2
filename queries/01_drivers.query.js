const knex = require('./db')

const fetchDrivers = () => {
  return knex('drivers')
};

// const getDriver = () => {
//   return knex('drivers')
// }




module.exports = {
  fetchDrivers
//   createDriver,
//   updateDriver,
//   deleteDriver
}