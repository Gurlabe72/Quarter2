//activate express 
const express = require('express')
const app = express();
//assign a port number to access local host
const port = 3333;

//This is how we are going to grab the 'hazardRoutes' function that we created
//in the ROUTES directory under hazards.controllers.js you put the path to get from
//this page './' and your PATH to get from there to that speciic directory. 

const hazardRoutes = require('./routes/hazards.routes');

// Do The same for comments 

const accidentsRoutes = require('./routes/accidents.routes')

//and drivers 

const driversRoutes = require('./routes/drivers.routes')

//===============Lets set up routes==========================//

app.use('/hazards' , hazardRoutes) 
app.use('/accidents' , accidentsRoutes)
app.use('/drivers' , driversRoutes)

//=============Create a route that GETs a collection of Pins=========// 

app.listen(port,console.log(`you are in port ${port}`));
