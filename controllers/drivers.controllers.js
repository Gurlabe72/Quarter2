const model = require('../models/01_drivers.models');

//==========================FETCH==========================//
const fetchDrivers = (request, response) => { 
    let promise = model.fetchDrivers()

    promise.then(result => {
      return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
  };
//==========================GET==========================//
const getDriver = (request, response, next) => {
  let {id} = request.params;

  let promise = model.getDriver(id)

  promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
};
//==========================CREATE==========================//
const createDriver = (request, response, next) => {
  let promise = model.createDriver(request.body)

  promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
  })
  promise.catch(error => {
    next(error)
  })
};
// ==========================DELETE==========================//
const destroyDriver = (request, response, next) => {
  const promise = model.destroyDriver(request.params.id);
  promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
  promise.catch(error =>{ 
    next(error)
  })
}
//==========================UPDATE==========================//
const updateDriver = (request, response, next) => {
  const promise = model.updateDriver(request.params.id, request.body);
  promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
  promise.catch(error =>{ 
    next(error)
  })
}

module.exports= {
    fetchDrivers,
    getDriver, 
    createDriver,
    destroyDriver,
    updateDriver
};