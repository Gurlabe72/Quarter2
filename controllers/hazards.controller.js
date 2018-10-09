const getHazard = (request, response) => {
    console.log(request.params)
    const id = request.params.id
    response.send(`you are getting the ${id}`)
};

const fetchHazards = (request, response) => { 
    response.send(`You are getting your pins`)
};

module.exports = {getHazard , fetchHazards};