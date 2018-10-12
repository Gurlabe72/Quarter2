const driversQuery = require('../queries/01_drivers.query')



const getAllDrivers = () => {
  drivers = driversQuery.getAllDrivers()

  return drivers.then(result => {
    return result.length < 1
      ? { error: 'error retreiving drivers', status: 404 }
      : result
  })
};

const fetchDrivers = () => {
    drivers = driversQuery.fetchDrivers()

    return drivers.then(result => {
        return result.length < 1
        ? { error: 'error retreiving ', status: 404 }
        : result
    })
};

const createDriver = () => {
  drivers = driversQuery.createDriver()

  return drivers.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
} ;

const updateDriver = () => {
  drivers = driversQuery.updateDriver()

  return drivers.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
};

const deleteDriver = () => {
    drivers = driversQuery.deleteDriver()
  
    return drivers.then(result => {
        return result.length < 1
        ? { error: 'error retreiving', status: 404 }
        : result
    })
  };

module.exports = {
  getAllDrivers, 
  fetchDrivers, 
  createDriver, 
  updateDriver, 
  deleteDriver
}  