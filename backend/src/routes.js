const express = require('express');
const routes = express.Router();

const NGOController = require('./controllers/NgoController');

// all the routes here

/**
 * CREATE A NEW NGO: POST() method
 */
routes.post('/ngos', async (request, response) => NGOController.create);

/**
 * LIST NGOs INSERTED: GET() method
 */ 
routes.get('/ngos/:limit', async(request, response) => NGOController.listAll);


// at the end, exports the routes:
module.exports = routes;