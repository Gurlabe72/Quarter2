const express = require('express'); 
const router = express.Router();
const ctrl = require('../controllers/drivers.controllers');

//================FETCH================//
router.get('/', ctrl.fetchDrivers);
//================GET================//
router.get('/:id',  ctrl.getDriver);
 //================POST================//
 router.post('/', ctrl.createDriver);
//================DELETE================//
router.delete('/:id', ctrl.destroyDriver);
//================UPDATE ================//
// router.put('/:id',ctrl.updateDriver) 
module.exports = router;