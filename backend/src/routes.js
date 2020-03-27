const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
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
 *  - with validation with `celebrate`:
 *    |- validates QUERY, BODY, ROUTE params
 */
routes.post('/ngos', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    phone: Joi.number().required().min(10).max(11),
    city: Joi.string().required(),
    state: Joi.string().required().length(2),
  })
}), NGOController.create);

/**
 * LIST NGOs INSERTED: GET() method
 */ 
routes.get('/ngos/:limit', NGOController.index);

/**
 * CREATES AN INCIDENT: POST()
 * 
 * two validations proposed:
 * 1) HEADERS, authorization
 * 2) BODY, title, description: STRING + value: NUMBER
 */
routes.post('/incidents', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
  
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    value: Joi.number().required(),
  }),
}), IncidentController.create);


/**
 * LIST INCIDENTS INSERTED: GET()
 * 
 * also validated with celebrate: pages must be a number,
 */
routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number(),
  }),
}) ,IncidentController.index);
/**
 * DELETE INCIDENT: delete()
 * 
 * also validated with celebrate: id must be a number.
 */
routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),
  }),
}), IncidentController.delete);

/**
 * GET INCIDENTS BY USER AUTHENTICATED
 * 
 * validated with celebrate
 * -> Have to grant ngo_id inside headers
 */
routes.get('/profile', celebrate({
  [Segments.HEADERS]: Joi.object({
    authorization: Joi.string().required(),
  }).unknown(),
}), ProfileController.index);

// at the end, exports the routes:
module.exports = routes;