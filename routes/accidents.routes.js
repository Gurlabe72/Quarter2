const express = require('express'); 
const router = express.Router();
//create a 'ctrl' varaible that lets you access a function that 
//we made in comments.controllers.js 
const ctrl = require('../controllers/accidents.controllers');
//express.router is node module that allows you to route APIs to
//a local host and packages them
//================FETCH================//
router.get(
    '/' ,
    ctrl.fetchAccidents
);
//this route above gets the full list of comments
//================GET================//
router.get(
    '/:id' ,
    ctrl.getAccident
);

// //================POST================//
// router.post(
//     '/',
//     ctrl.createAccident
// )

 module.exports = router;