const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {

  beforeEach(async () => {
    await connection.migrate.rollback();  // clears last migration
    await connection.migrate.latest();    // runs a new migration to start over
  }); 

  afterAll( async () => {
    // disconnect from database
    await connection.destroy();
  })

  it('should be able to create a NEW NGO', async () => {
    const response = await request(app)
      .post('/ngos')
      .send({
        name: "AAAAA",
        email: "contact@test.com",
        phone: "1234567890",
        city: "Olinda",
        state: "PE"
      }); 

      // console.log(response.body);  // debugging
      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
      
  })
})