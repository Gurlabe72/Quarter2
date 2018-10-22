//The method we are using in the ROUTES directory will be using the ROUTER method of router.get()
//first we need to require express and define the router 
const express = require('express'); 
const router = express.Router();
//create a 'ctrl' varaible that lets you access a function that 
//we made in hazards.controllers.js 
const ctrl = require('../controllers/hazards.controllers')
console.log(ctrl)
//================FETCH================//
router.get(
    '/' , 
    ctrl.fetchHazards
);
//The route above gets a specific hazards. 
//'/' means we are starting from the beginnging of the url 
//================GET================//
// router.get( 
//     '/:id' , 
//     ctrl.getHazards  
// );
 //this route above gets the full list of hazards 
// //================POST================//
// router.post(
//     '/',
//     ctrl.createHazards
// )
//================PUT================//
// router.put(
//     '/',
//     ctrl.updateHazards   
// )
// //================DELETE================//
// router.delete(
//     '/',
//     ctrl.deleteHazards
// )
module.exports = router;
