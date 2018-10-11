exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('hazards')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('hazards').insert([
          {
            id:201,
            driver_id:1,
            hazard_type:'This is the hazard',
            location: 'This is my location'
          },  
          {
            id:202,
            driver_id:2,
            hazard_type:'This is the hazard',
            location: 'This is my location'
          },
          {
            id:203,
            driver_id:3,
            hazard_type:'This is the hazard',
            location: 'This is my location'
          },
          {
            id:204,
            driver_id:4,
            hazard_type:'This is the hazard',
            location: 'This is my location'
          },
        ])
      })
      .then(() =>
        knex.raw(
          `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
        )
      )
  }