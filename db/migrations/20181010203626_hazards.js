exports.up = function(knex, Promise) {
    return knex.schema.createTable('hazards', (table) => {
      table.increments()
      table.integer('drivers_id').notNullable()
      table.foreign('drivers_id').references('drivers.id').onDelete('CASCADE')
      table.string('hazards_type').defaultTo('')
      table.string('location').defaultTo('')
      table.timestamp(true, true);
  })
}
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('hazards')
  }