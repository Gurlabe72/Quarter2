const model = require('../models/03_accidents.models');
//==========================FETCH==========================//
const fetchAccidents = (request, response) => { 
  let payload = request.body 
  let promise = model.fetchAccidents(payload);
  promise.then(result => {
  console.log(result)
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
// //function that updates an accident report 
// const updateAccident = ( request, response) => {
//     response.send(`You have updated an accident report`)
// };
// //function that deletes an accident report
// const deleteAccident = (request, response) => {
//     response.send(`You have deleted an accident report`)
// }
module.exports = {
    fetchAccidents, 
    getAccident, 
    createAccident, 
};