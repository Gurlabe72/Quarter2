const express = require('express'); 
const router = express.Router();
const ctrl = require('../controllers/accidents.controllers');

//================FETCH================//
router.get('/', ctrl.fetchAccidents);
//================GET================//
router.get('/:id', ctrl.getAccident);
// //================POST================//
router.post('/', ctrl.createAccident);
//================DELETE================//
router.delete('/:id', ctrl.destroyAccident);
//================UPDATE ================//
router.put('/:id', ctrl.updateAccident);

 module.exports = router;