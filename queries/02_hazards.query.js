const knex = require('./db')
//=================================FETCH=================================/
const fetchHazards = () => {
  return knex('hazards')
}
//=================================GET=================================/
const getHazard = (id) => {
  return knex('hazards')
     .select('hazards.drivers_id','hazards.type','hazards.location')
      .where('id',id);
}
//=================================CREATE=================================/
const createHazard = (hazardInfo) => {
  console.log(hazardInfo)
  return knex('hazards')
  .insert ({
    drivers_id: hazardInfo.drivers_id,
    hazards_type: hazardInfo.hazards_type,
    location: hazardInfo.location,
  })
 .then(result => {
  return {message: `Thank you for posting at ${hazardInfo.location}!`}
})
.catch(err => {
  return err.message;
})
}
//=================================DELETE=================================/
const destroyHazard = (id) => {
  return knex('hazards')
    .where("id", id)
    .del()
    .returning('*')

    .then(result => {
      console.log(result)
      return {message: `deleting hazard at ${result[0].location}`}
    })
    .catch(err => {
      return err.message;
    })
}
//===============================UPDATE===============================//
const updateHazard = (id, hazardInfo) => {
  return knex('hazards')
    .update(hazardInfo)
    .where('id', id)
    
    .then(result => {
      console.log(result)
      return {message: `updating hazard ${result[0].location}`}
    })
}
module.exports = {
  fetchHazards,
  getHazard,
  createHazard,
  destroyHazard,
  updateHazard
}