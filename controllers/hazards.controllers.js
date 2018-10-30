const model = require('../models/02_hazards.models')

//function that creates a hazard
const fetchHazards = (request, response) => {
        let payload = request.body 
        let promise = model.fetchHazards(payload);
        promise.then(result => {
        return response.status(200).json(result); 
        })
        .catch(error =>{
            console.log(error)
        }) 
};
//==========================GET==========================//
    const getHazard = (request, response, next) => {
        let {id} = request.params;
      
        let promise = model.getHazard(id)
      
        promise.then(result => {
          return result.error ? next(result) : response.status(200).json(result)
        })
        promise.catch(error => {
          next(error)
        })
      };

//==========================CREATE==========================//
const createHazard = (request, response, next) => {
    let promise = model.createHazard(request.body)
  
    promise.then(result => {
      return result.error ? next(result) : response.status(200).json(result)
    })
    promise.catch(error => {
      next(error)
    })
  };
// ==========================DELETE==========================//
const destroyHazard = (request, response, next) => {
  const promise = model.destroyHazard(request.params.id);
  promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
  promise.catch(error =>{ 
    next(error)
  })
}  
//==========================UPDATE==========================//
const updateHazard = (request, response, next) => {
  const promise = model.updateHazard(request.params.id, request.body);
  promise.then(result => {
    return result.error ? next(result) : response.status(200).json(result)
    })
  promise.catch(error =>{ 
    next(error)
  })
};

module.exports = {
    fetchHazards,  
    getHazard,       
    createHazard,
    destroyHazard,
    updateHazard
};