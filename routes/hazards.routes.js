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

//================UPDATE ================//
module.exports = router;
