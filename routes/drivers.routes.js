const express = require('express'); 
const router = express.Router();

//create a 'ctrl' varaible that lets you access a function that 
//we made in drivers.controllers.js 

const ctrl = require('../controllers/drivers.controller');

//express.router is node module that allows you to route APIs to
//a local host and packages them.  

router.get(
    '/' ,
    ctrl.getComments
);

//The route above GETS ALL 
//'/' means we are starting from the beginnging of the url 
router.get(
    '/:id' ,
    ctrl.fetchComments 
);
//this route above fetches a specifc comment based on an Id 