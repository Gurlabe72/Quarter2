
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors')
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())
//This is how we are going to grab the 'hazardRoutes' function that we created
//in the ROUTES directory under hazards.controllers.js you put the path to get from
//this page './' and your PATH to get from there to that speciic directory. 
const driversRoutes = require('./routes/drivers.routes')
const hazardRoutes = require('./routes/hazards.routes');
const accidentsRoutes = require('./routes/accidents.routes')



//===============Lets set up routes==========================//
app.use('/drivers' , driversRoutes)
app.use('/hazards' , hazardRoutes)
app.use('/accidents' , accidentsRoutes)


//=============Create a route that GETs a collection`=========// 
app.listen(port,console.log(`you are in port ${port}`));
