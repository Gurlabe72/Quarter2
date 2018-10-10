const express = require('express'); 
const router = express.Router();

//create a 'ctrl' varaible that lets you access a function that 
//we made in hazards.controllers.js 

const ctrl = require('../controllers/hazards.controller');



router.get(
    '/' , 
    ctrl.fetchHazards
);

router.get( 
    '/:id' , 
    ctrl.getHazard  
);
 
//driver's routes in its own structure 

//commments routes 


module.exports = router;