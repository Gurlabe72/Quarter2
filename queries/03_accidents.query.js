const knex = require('./db')
//=================================FETCH=================================/
const fetchAccidents = () => {
  return knex('accidents')
}
//=================================GET=================================/
const getAccident = (id) => {
  return knex('drivers')
     .select('hazards.comment')
      .where('id',id);
}
//=================================CREATE=================================/
module.exports = {
fetchAccidents,
getAccident
 // createAccident,
 }