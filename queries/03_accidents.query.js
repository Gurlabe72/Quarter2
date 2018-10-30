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
const destroyAccident = (id) => {
  return knex('accidents')
    .where("id", id)
    .del()
    .returning('*')

    .then(result => {
      console.log(result)
      return {message: `deleting your comment ${result[0].comment}`}
    })
    .catch(err => {
      return err.message;
    })
}
//===============================UPDATE===============================//
const updateAccident = (id, accidentInfo) => {
  return knex('accident')
    .update(accidentInfo)
    .where('id', id)
    
    .then(result => {
      console.log(result)
      return {message: `updating accident ${result[0].comment}`}
    })
}
module.exports = {
fetchAccidents,
getAccident,
createAccident,
destroyAccident,
updateAccident
}