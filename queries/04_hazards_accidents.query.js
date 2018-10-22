const knex = require('./db')

const fetchHazards_accidents = () => {
  return knex('hazards_accidents')
}

// const getAccident = () => {
//   return knex('azards_Accidents)
// }


module.exports = {
fetchHazards_accidents
//   getHazards_Accidents
//   createHazards_Accidents
//   updateHazards_Accidents
//   deleteHazards_Accidents 
}