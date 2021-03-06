// imports
const connection = require('../database/connection');
const generateUniqueID = require('../utils/generateUniqueID');

// logic

module.exports = {
  // create NGO
  async create(request, response) {
  
    const { name, email, phone, city, state } = request.body;
    // to create and cryptograped id:
    const id = generateUniqueID();
    // stablish connection with db:
    await connection('ngos').insert({
      id,
      name,
      email,
      phone,
      city,
      state
    });
    // returns only an ID of the recently created NGO
    return response.json({ id });
  },

  // list all inserted NGOs

  async index(request, response) {
    // limit of the search:
    const { limit } = request.params;
    console.log(`Search limit: ${limit}`);
    
    // searchs everything (start) limiting results (limit(x))
    const allNGOs = await connection('ngos').select('*').limit(limit);
    // returns that json object:
    return response.json(allNGOs);
  
  },
  
}