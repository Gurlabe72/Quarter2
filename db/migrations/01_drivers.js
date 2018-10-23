exports.up = function(knex, Promise) {
    return knex.schema.createTable('drivers', (table) => {
      table.increments()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('bio').defaultTo('')
      table.timestamp(true,true);
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('drivers')
  }