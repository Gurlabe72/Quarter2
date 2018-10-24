const knex = require('./db')
//=================================FETCH=================================/
const fetchAccidents = () => {
  return knex('accidents')
}
//=================================GET=================================/
const getAccident = (id) => {
  return knex('accidents')
     .select('accidents.hazards_id','accidents.comment')
      .where('id',id);
}
//=================================CREATE=================================/
const createAccident = (accidentInfo) => {
  console.log(accidentInfo)
  return knex('accidents')
  .insert ({
    hazards_id: accidentInfo.hazards_id,
    comment: accidentInfo.comment
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