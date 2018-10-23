const express = require('express'); 
const router = express.Router();
//create a 'ctrl' varaible that lets you access a function that 
//we made in drivers.controllers.js 
const ctrl = require('../controllers/drivers.controllers');
//express.router is node module that allows you to route APIs to
//a local host and packages them.
//================FETCH================//
router.get(
    '/' ,
    ctrl.fetchDrivers 
);
//================GET================//
router.get(
    '/:id' ,
    ctrl.getDriver
);
 //================POST================//
 router.post(
    '/',
    ctrl.createDriver
);
//================DELETE================//
router.delete(
    '/:id',
    ctrl.destroyDriver
);
//================UPDATE ================//
// router.put (
//     '/:id',
//     ctrl.updateDriver
// )
module.exports = router;