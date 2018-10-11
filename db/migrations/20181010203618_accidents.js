exports.up = function(knex, Promise) {
  return knex.schema.createTable('accidents',(table) => {
    table.increments()
    table.string('comment').notNullable()
    table.timestamp(true,true);
    })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('accidents')
}
