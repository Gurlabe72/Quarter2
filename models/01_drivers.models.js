const driversQuery = require('../queries/01_drivers.query')
//=================================FETCH=================================/
const fetchDrivers = () => {
    let drivers = driversQuery.fetchDrivers()

    return drivers.then(result => {
        return result.length < 1
        ? { error: 'error retreiving drivers', status: 404 }
        : result
    })
};
//=================================GET=================================/
const getDriver= (id) => {
 let drivers = driversQuery.getDriver(id)

  return drivers.then(result => {
      return result.length < 1
      ? { error: 'error retreiving ', status: 404 }
      : result
  }) 
};
//=================================CREATE=================================/
const createDriver = (driverInfo) => {
  let drivers = driversQuery.createDriver(driverInfo)

  return drivers.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
} ;

module.exports = {
  fetchDrivers,
  getDriver,
  createDriver

}  