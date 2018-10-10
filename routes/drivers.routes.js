const express = require('express'); 
const router = express.Router();

//create a 'ctrl' varaible that lets you access a function that 
//we made in drivers.controllers.js 

const ctrl = require('../controllers/drivers.controllers');

//express.router is node module that allows you to route APIs to
//a local host and packages them.  

router.get(
    '/' ,
    ctrl.getDriver
);
//The route above gets a specific driver for you 

//'/' means we are starting from the beginnging of the url 
router.get(
    '/:id' ,
    ctrl.fetchDrivers 
);
//this route above gets the full list of comments  
module.exports = router;