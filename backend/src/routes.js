const express = require('express');
const routes = express.Router();

const NGOController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');

// all the routes here

/**
 * CREATE A NEW NGO: POST() method
 */
routes.post('/ngos', NGOController.create);

/**
 * LIST NGOs INSERTED: GET() method
 */ 
routes.get('/ngos/:limit', NGOController.index);

/**
 * CREATES AN INCIDENT: POST()
 */
routes.post('/incidents', IncidentController.create);
/**
 * LIST INCIDENTS INSERTED: GET()
 */
routes.get('/incidents', IncidentController.index);

// at the end, exports the routes:
module.exports = routes;