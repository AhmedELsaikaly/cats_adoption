var CatsRouter = require('express').Router();
var CatsController = require('./CatsController');

// Create route handlers for the required methods in CatsController
    CatsRouter.post('/Adopt', CatsController.create);
    CatsRouter.post('/Contact', CatsController.createContact);
    CatsRouter.post('/Volunteer', CatsController.createVolunteer);
    
module.exports = CatsRouter;