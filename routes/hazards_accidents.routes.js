//The method we are using in the ROUTES directory will be using the ROUTER method of router.get()
//first we need to require express and define the router 
const express = require('express'); 
const router = express.Router();
//create a 'ctrl' varaible that lets you access a function that 
//we made in Hazards_Accidents.controllers.js 
const ctrl = require('../controllers/hazards_accidents.controllers')
console.log(ctrl)
//================FETCH================//
router.get(
    '/' , 
    ctrl.fetchHazards_accidents
);
//The route above gets a specific Hazards_Accidents. 
//'/' means we are starting from the beginnging of the url 
//================GET================//
// router.get( 
//     '/:id' , 
//     ctrl.getHazards_accidents  
// );
 //this route above gets the full list of Hazards_Accidents 
// //================POST================//
// router.post(
//     '/',
//     ctrl.createHazards_accidents
// )
//================PUT================//
// router.put(
//     '/',
//     ctrl.updateHazards_accidents   
// )
// //================DELETE================//
// router.delete(
//     '/',
//     ctrl.deleteHazards_accidents
// )
module.exports = router;
