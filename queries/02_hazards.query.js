const knex = require('./db')

const fetchHazards = () => {
  return knex('hazards')
}

// const getHazard = () => {
//   return knex('hazards')
// }




 
module.exports = {
  fetchHazards
  // getHazard,
  // createHazard,

}