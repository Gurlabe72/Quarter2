
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors')
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const driversRoutes = require('./routes/drivers.routes')
const hazardRoutes = require('./routes/hazards.routes');
const accidentsRoutes = require('./routes/accidents.routes')


app.use('/drivers' , driversRoutes)
app.use('/hazards' , hazardRoutes)
app.use('/accidents' , accidentsRoutes)


app.listen(port,console.log(`Your mom weighs ${port} pounds`));
    