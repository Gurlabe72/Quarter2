exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('hazards_accidents')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('hazards_accidents').insert([
          {
              id:1,
              hazards_id:201 ,
              accidents_id:101 , 
          },
          {
            id:2,
            hazards_id:202 ,
            accidents_id: 102, 
        },
        {
            id:3,
            hazards_id:203 ,
            accidents_id:103, 
        },
        {
            id:4,
            hazards_id:204 ,
            accidents_id:104, 
        }])
    })
    .then(() =>
    knex.raw(
      `SELECT setval('"hazards_accidents_id_seq"', (SELECT MAX("id") FROM "hazards_accidents"))`
    )
  )
}
