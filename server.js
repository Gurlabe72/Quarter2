//activate express 
const express = require('express')
const app = express();
//assign a port number to access local host
const port = 3333;
const hazardRoutes = require('./routes/hazards.routes');


//===============Lets set up routes==========================//

app.use('/hazards' , hazardRoutes) 
//=============Create a route that GETs a collection of Pins=========// 


app.listen(port,console.log(`you are in port ${port}`));

