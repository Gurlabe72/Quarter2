const knex = require('./db')


// const getAllDrivers = () => {
//   return knex('drivers')
// }


const fetchDrivers = () => {
  return knex('drivers')
};







// const createDriver = () => {
//   let drivers = driversQuery.createDriver()
//   };







//   const updateDriver = () => {
//   let drivers = driversQuery.updateDriver()
// }







// const deleteDriver = () => {
//   let drivers = driversQuery.deleteDriver()
// }
 




module.exports = {
//   getAllDrivers,
  fetchDrivers
//   createDriver,
//   updateDriver,
//   deleteDriver
}