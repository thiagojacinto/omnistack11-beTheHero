const express = require('express');
const routes = express.Router();

const NGOController = require('./controllers/NgoController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

// all the routes here

/**
 * SESSIONS
 */
routes.post('/session', SessionController.create);

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
/**
 * DELETE INCIDENT: delete()
 */
routes.delete('/incidents/:id', IncidentController.delete);

/**
 * GET INCIDENTS BY USER AUTHENTICATED
 */
routes.get('/profile', ProfileController.index);

// at the end, exports the routes:
module.exports = routes;