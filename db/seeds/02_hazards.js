exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('hazards')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('hazards').insert([
          {
            id:201,
            drivers_id:1,
            hazards_type:'This is the hazard',
            location: 'This is my location'
          },  
          {
            id:202,
            drivers_id:2,
            hazards_type:'This is the hazard',
            location: 'This is my location'
          },
          {
            id:203,
            drivers_id:3,
            hazards_type:'This is the hazard',
            location: 'This is my location'
          },
          {
            id:204,
            drivers_id:4,
            hazards_type:'This is the hazard',
            location: 'This is my location'
          },
        ])
      }).then(() =>
      knex.raw(
        `SELECT setval('"hazards_id_seq"', (SELECT MAX("id") FROM "hazards"))`
      )
    )
  }