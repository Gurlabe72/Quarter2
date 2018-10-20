exports.up = function(knex, Promise) {  
    return Promise.all([
      knex.schema.createTable('hazards_accidents', function(table){
        table.increments('it').primary();
        table.integer('hazards_id').references('hazards.id');
        table.integer('accidents_id').references('accidents.id');
      }),
    ]);
  };
  
  exports.down = function(knex, Promise) {  
    return Promise.all([
      knex.schema.dropTable('hazards'),
      knex.schema.dropTable('hazards_accidents'),
      knex.schema.dropTable('accidents_id')
    ]);
  };