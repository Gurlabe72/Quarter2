const knex = require('./db')

const fetchAccidents = () => {
  return knex('accidents')
}

// const getAccident = () => {
//   return knex('Accident')
// }


module.exports = {
fetchAccidents
//   getAccident,
//   createAccident,
//   updateAccident,
//   deleteaccident
 }