const express = require('express'); 
const router = express.Router();
const ctrl = require('../controllers/hazards.controller');



router.get(
    '/' , 
    ctrl.fetchHazards
);

router.get(
    '/:id' , 
    ctrl.getHazard  
);
 
//drivers routes in its own structure 

//commments routes 


module.exports = router;