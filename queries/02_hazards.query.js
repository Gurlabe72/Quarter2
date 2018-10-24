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
    hazards_type: hazardInfo.hazardsType,
    location: hazardInfo.location,
  })
 .then(result => {
  return {message: `Thank you for posting at ${hazardInfo.location}!`}
})
.catch(err => {
  return err.message;
})
}

module.exports = {
  fetchHazards,
  getHazard,
  createHazard
}