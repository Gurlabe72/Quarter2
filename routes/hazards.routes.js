const express = require('express'); 
const router = express.Router();

//create a 'ctrl' varaible that lets you access a function that 
//we made in hazards.controllers.js 

const ctrl = require('../controllers/hazards.controllers');


//================FETCH================//
router.get(
    '/' , 
    ctrl.fetchHazards
);
//The route above gets a specific hazard. 

//'/' means we are starting from the beginnging of the url 
//================GET================//
router.get( 
    '/:id' , 
    ctrl.getHazard  
);
 //this route above gets the full list of hazards  

//================POST================//

//================PUT================//

//================DELETE================//

module.exports = router;
