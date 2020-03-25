// imports
const connection = require('../database/connection');


module.exports = {

  /**
   * LISTS ALL INCIDENTS (within limit)
   */
  async index(request, response) {

    /**
     * SIMPLE PAGINATION IMPLEMENTATION RETURNING WITHIN RESPONSE.HEADER
     */
    
    // limit of the search:
    // default is value after `=`
    const { page = 1 } = request.query;
    const { limit = 5 } = request.query;

    console.log(`Page number: ${page}; and it has to show ${limit} n. of incidents.`);

    const [count] = await connection('incidents').count();
    
    // searchs everything (start) limiting results (limit(x))
    const allIncidents = await connection('incidents')
    .join('ngos', 'ngos.id', '=', 'incidents.ngo_id')
    .limit(limit)
    .offset((page - 1)*limit)
    .select([
      'incidents.*',
      'ngos.name',
      'ngos.email',
      'ngos.phone',
      'ngos.city',
      'ngos.state'
    ]);

    // put count inside response header:
    response.header('X-Total-Count', count['count(*)']);
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