
exports.up = function (knex) {
  return knex.schema.createTable('incidents', function(table) {

    table.increments(); // auto increment integer & primary
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();
    // relational with NGO`s id:
    table.string('ngo_id').notNullable();
    // foreign key
    table.foreign('ngo_id').references('id').inTable('ngos');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('incidents');
};
