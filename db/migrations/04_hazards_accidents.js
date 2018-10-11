
  exports.up = function(knex, Promise) {
    return knex.schema.createTable('hazards_accidents', (table) => {
      table.increments()
      table.integer('hazards_id').notNullable()
      table.foreign('hazards_id').references('hazards.id').onDelete('CASCADE')

      table.integer('accidents_id').notNullable()
      table.foreign('accidents_id').references('accidents.id').onDelete('CASCADE')

      table.timestamp(true,true);
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hazards_accidents')
  }