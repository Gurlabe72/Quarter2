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
const model = require('../models/04_hazards_accidents.models')

//function that creates a hazard
const fetchHazards_accidents = (request, response) => {
        let payload = request.body 
        let promise = model.fetchHazards_accidents(payload);
        promise.then(result => {
        console.log(result)
        return response.status(200).json(result); 
        })
        .catch(error =>{
            console.log(error)
        }) 
};
// const getHazards_Accidents = (request, response) => {
//     console.log(request.params)
//     const id = request.params.id
//     let promise = model.Hazards_Accidents
//     response.send(`you are getting the ${id}`)
// };


//Function that gets a specific HAZARDs_Accidents for you 



// //function that updates a current hazards_Accidents 
// const updateHazards_Accidents = (request, response) => {
//     response.send(`You are updating a Hazards_Accidents`)
// }
// //function that deletes a hazards_Accidents. 
// const deleteHazards_Accidents = (request, response) => {
//     response.send(`You are deleting a Hazards_Accidents`)
// }
module.exports = {
    fetchHazards_accidents  
    // getHazards_Accidents, 
    // createHazards_Accidents, 
    // updateHazards_Accidents, 
    // deleteHazards_Accidents
};