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
  return `Welcome to Trucker ${driverInfo.first_name}!` 
})
.catch(err => {
  return err.message;
})
}




module.exports = {
   fetchDrivers,
   getDriver,
   createDriver
}