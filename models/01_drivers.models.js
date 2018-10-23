const driversQuery = require('../queries/01_drivers.query')

const fetchDrivers = () => {
    let drivers = driversQuery.fetchDrivers()

    return drivers.then(result => {
        return result.length < 1
        ? { error: 'error retreiving drivers', status: 404 }
        : result
    })
};

const getDriver= (id) => {
 let drivers = driversQuery.getDriver(id)

  return drivers.then(result => {
      return result.length < 1
      ? { error: 'error retreiving ', status: 404 }
      : result
  }) 
};

const createDriver = (body) => {
  let drivers = driversQuery.createDriver(body)

  return drivers.then(result => {
      return result.length < 1
      ? { error: 'error retreiving', status: 404 }
      : result
  })
} ;

// const updateDriver = () => {
//   drivers = driversQuery.updateDriver()

//   return drivers.then(result => {
//       return result.length < 1
//       ? { error: 'error retreiving', status: 404 }
//       : result
//   })
// };

// const deleteDriver = () => {
//     drivers = driversQuery.deleteDriver()
  
//     return drivers.then(result => {
//         return result.length < 1
//         ? { error: 'error retreiving', status: 404 }
//         : result
//     })
 //};

module.exports = {
  fetchDrivers,
  getDriver,
  createDriver
  // updateDriver, 
  // deleteDriver
}  