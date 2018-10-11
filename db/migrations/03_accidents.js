exports.up = function(knex, Promise) {
  return knex.schema.createTable('accidents',(table) => {
    table.increments()
    table.string('comment').notNullable()
    table.integer('hazards_id').notNullable()
    table.foreign('hazards_id').references('hazards.id').onDelete('CASCADE')
    table.timestamp(true,true);
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accidents')
}
