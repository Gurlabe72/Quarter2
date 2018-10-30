const model = require('../models/03_accidents.models');
//==========================FETCH==========================//
const fetchAccidents = (request, response) => { 
  let payload = request.body 
  let promise = model.fetchAccidents(payload);
  promise.then(result => {
  return response.status(200).json(result); 
  })
  .catch(error =>{
      console.log(error)
  })
};
//==========================GET==========================//
const getAccident = (request, response, next) => {
    let {id} = request.params;
  
    let promise = model.getAccident(id)
  
    promise.then(result => {
      return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
  };
  //==========================CREATE==========================//
  const createAccident = (request, response, next) => {
    let promise = model.createAccident(request.body)
  
    promise.then(result => {
      return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
  };
// ==========================DELETE==========================//
const destroyAccident = (request, response, next) => {
  const promise = model.destroyAccident(request.params.id);
  promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
  promise.catch(error =>{ 
    next(error)
  })
}
//==========================UPDATE==========================//
const updateAccident = (request, response, next) => {
  const promise = model.updateAccident(request.params.id, request.body);
  promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
  promise.catch(error =>{ 
    next(error)
  })
}
module.exports = {
    fetchAccidents, 
    getAccident, 
    createAccident,
    destroyAccident,
    updateAccident
};