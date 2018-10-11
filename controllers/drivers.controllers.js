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
// Instruct the framework
//on how to generate a response
//function that gets a specific  driver 
const getDriver = (request, response) => {
    console.log(request.params)
    const id = request.params.id
    response.send(`you are getting the ${id}`)
};
//function that gets a list pf all DRIVERS 
const fetchDrivers = (request, response) => { 
    response.send(`You are getting your drivers`)
};
//function that creates a driver 
const createDriver = (resquest, response) => {
    response.send(`You have created a driver`)
};
//function that updates a driver 
const updateDriver = (request, response) => {
    response.send(`You have updated a driver `)
}
//function that deletes a driver
const  deleteDriver = (request, response) => {
    response.send(`You have deleted a driver`)
}
module.exports =  {getDriver , fetchDrivers, createDriver , updateDriver, deleteDriver};