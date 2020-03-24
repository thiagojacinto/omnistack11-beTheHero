const express = require('express');
const crypto = require('crypto');
const connection = require('./database/connection');
const routes = express.Router();

// all the routes here

/**
 * CREATE A NEW NGO: POST() method
 */
routes.post('/ngos', async (request, response) => {
  
  const { name, email, phone, city, state } = request.body;
  // to create and cryptograped id:
  const id = crypto.randomBytes(4).toString('HEX');   
  // stablish connection with db:
  await connection('ngos').insert({
    id,
    name,
    email,
    phone,
    city,
    state
  });

  return response.json({ id });

});

routes.get('/ngos/:limit', async(request, response) => {
  // limit of the search:
  const { limit } = request.params;
  console.log(`Search limit: ${limit}`);
  
  // searchs everything (start) limiting results (limit(x))
  const allNGOs = await connection('ngos').select('*').limit(limit);
  // returns that json object:
  return response.json(allNGOs);

});


// at the end, exports the routes:
module.exports = routes;