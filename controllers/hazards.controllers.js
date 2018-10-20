// In Express, your "controllers" are the functions you pass as the route handlers:
// router.get("/", function(req, res, next) {
//   req.query         // <-- get querystring values such as ?foo=bar
//   req.params        // <-- get path params such as the "34" in /posts/34/comments
//   req.body          // <-- get either the json that was posted, or the form values
//   res.render(...)   // <-- render a template
//   res.json(...)     // <-- render a JSON response
//}
// Controllers typically:
// Access data from the request
// Coordinate with other parts of the app (such as models, external services etc...)
// Instruct the framework on how to generate a response
const model = require('../models/02_hazards.models')

//function that creates a hazard
const getHazard = (request, response) => {
    console.log(request.params)
    const id = request.params.id
    let promise = model.fetchHazards
    response.send(`you are getting the ${id}`)
};

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
}
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
    getHazard, 
    fetchHazards, 
    // createHazard, 
    // updateHazard, 
    // deleteHazard
};