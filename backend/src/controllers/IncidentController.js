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

  /**
   * DELETES INCIDENT
   */
  async delete(request, response) {
    // gets the ID from the creator
    const ngo_id = request.headers.authorization;
    // and gets the id for the desired incident to delete:
    const { id } = request.params;

    const incident = await connection('incidents')
      .where('id', id)  // um unico ID
      .select('ngo_id')
      .first();

    if (incident.ngo_id !== ngo_id) {
      // Status 401 is UNAUTHORIZED ACCES
      return response.status(401).json({ 
        error: 'Error: Operation not permitted; Unauthorized access.'
      });
    }

    await connection('incidents').where('id', id).delete();
    // Status 401 is SUCCESS but NO-CONTENT;
    return response.status(204).send();
  },
}