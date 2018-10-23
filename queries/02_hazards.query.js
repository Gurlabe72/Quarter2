const knex = require('./db')
//=================================FETCH=================================/
const fetchHazards = () => {
  return knex('hazards')
}
//=================================GET=================================/
const getHazard = (id) => {
  return knex('drivers')
     .select('hazards.drivers_id','hazards.type','hazards.location')
      .where('id',id);
}
//=================================CREATE=================================/

module.exports = {
  fetchHazards,
  getHazard
  // createHazard,
}