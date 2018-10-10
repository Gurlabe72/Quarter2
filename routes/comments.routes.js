const express = require('express'); 
const router = express.Router();

//create a 'ctrl' varaible that lets you access a function that 
//we made in comments.controllers.js 

const ctrl = require('../controllers/comments.controllers');

//express.router is node module that allows you to route APIs to
//a local host and packages them.  
router.get(
    '/' ,
    ctrl.fetchComments 
);
//this route above gets the full list of comments

router.get(
    '/:id' ,
    ctrl.getComment
);
//The route above gets a specific driver for you 

//'/' means we are starting from the beginnging of the url 
  
module.exports = router;