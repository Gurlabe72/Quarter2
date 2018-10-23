const model = require('../models/02_hazards.models')

//function that creates a hazard
const fetchHazards = (request, response) => {
        let payload = request.body 
        let promise = model.fetchHazards(payload);
        promise.then(result => {
        console.log(result)
        return response.status(200).json(result); 
        })
        .catch(error =>{
            console.log(error)
        }) 
};
const getHazard = (request, response) => {
    console.log(request.params)
    const id = request.params.id
    let promise = model.fetchHazards
    response.send(`you are getting the ${id}`)
};


//Function that gets a specific HAZARD for you 



// //function that updates a current hazard 
// const updateHazard = (request, response) => {
//     response.send(`You are updating a Hazard`)
// }
// //function that deletes a hazard. 
// const deleteHazard = (request, response) => {
//     response.send(`You are deleting a Hazard`)
// }
module.exports = {
    fetchHazards,  
    getHazard       
    // createHazard, 
  
};