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

const commentsRoutes = require('./routes/comments.routes')


//===============Lets set up routes==========================//

app.use('/hazards' , hazardRoutes) 
app.use('/comments' , commentsRoutes)
//=============Create a route that GETs a collection of Pins=========// 

app.listen(port,console.log(`you are in port ${port}`));

