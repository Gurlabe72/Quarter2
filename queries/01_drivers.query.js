const knex = require('./db')
//=================================FETCH=================================/
const fetchDrivers = () => {
  return knex('drivers')
};
//=================================GET=================================/
const getDriver = (id) => {
  return knex('drivers')
     .select('drivers.first_name','drivers.last_name','drivers.bio')
      .where('id',id);
}
//=================================CREATE=================================/
const createDriver = (driverInfo) => {
  return knex('drivers')
  .insert ({
    first_name: driverInfo.firstName,
    last_name: driverInfo.lastName,
    bio: driverInfo.bio 
  })
 .then(result => {
  return {message: `Welcome to Trucker ${driverInfo.firstName}!`}
})
.catch(err => {
  return err.message;
})
}
//=================================DELETE=================================/
const destroyDriver = (id) => {
  return knex('drivers')
    .where("id", id)
    .del()
    .returning('*')

    .then(result => {
      console.log(result)
      return {message: `deleting driver ${result[0].firstName}`}
    })
    .catch(err => {
      return err.message;
    })
}
//===============================UPDATE===============================//
const updateDriver = (id, driverInfo) => {
  return knex('drivers')
    .update(driverInfo)
    .where('id', id)
    
    .then(result => {
      console.log(result)
      return {message: `updating driver ${result[0].first_name}`}
    })
}

module.exports = {
   fetchDrivers,
   getDriver,
   createDriver,
   destroyDriver,
   updateDriver
}