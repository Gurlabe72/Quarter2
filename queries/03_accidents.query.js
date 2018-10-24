const knex = require('./db')
//=================================FETCH=================================/
const fetchAccidents = () => {
  return knex('accidents')
}
//=================================GET=================================/
const getAccident = (id) => {
  return knex('drivers')
     .select('accidents.comment')
      .where('id',id);
}
//=================================CREATE=================================/
const createAccident = (accidentInfo) => {
  return knex('drivers')
  .insert ({
    first_name: accidentInfo.comment,
  })
 .then(result => {
  return {message: `The comment ${accidentInfo.comment} has been posted`}
})
.catch(err => {
  return err.message;
})
}
//=================================DELETE=================================//

module.exports = {
fetchAccidents,
getAccident,
createAccident
 }