// imports
const connection = require('../database/connection');


module.exports = {

  /**
   * LISTS ALL INCIDENTS (within limit)
   */
  async index(request, response) {
    // limit of the search:
    const { limit } = request.params;
    console.log(`Search limit: ${limit}`);
    
    // searchs everything (start) limiting results (limit(x))
    const allIncidents = await connection('incidents').select('*').limit(limit);
    // returns that json object:
    return response.json(allIncidents);
  },

  /**
   * SAVES NEW INCIDENT
   */
  async create(request, response) {
    const { title, description, value } = request.body;
    const ngo_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      title,
      description,
      value,
      ngo_id,
    });

    return response.json({ id });
  },

}