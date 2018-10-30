const express = require('express'); 
const router = express.Router();
const ctrl = require('../controllers/hazards.controllers')
//================FETCH================//
router.get('/', ctrl.fetchHazards);
//================GET================//
router.get('/:id', ctrl.getHazard);
// //================POST================//
router.post('/', ctrl.createHazard);
//================DELETE================//
router.delete('/:id', ctrl.destroyHazard);
//================UPDATE ================//
router.put('/:id', ctrl.updateHazard);

module.exports = router;
