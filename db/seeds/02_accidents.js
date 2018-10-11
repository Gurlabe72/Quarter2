exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('accidents')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('accidents').insert([
          {
            id:101,
            hazard_id:101,
            comment: 'this is my accident'
          },
          {
            id:102,
            hazard_id:102,
            accident: 'this is my accident'
          },
          {
            id:103,
            hazard_id:103,
            accident: 'this is my accident'
          },
          {
            id:104,
            hazard_id:104,
            accident: 'this is my accident'
          }
        ])
      })
      .then(() =>
        knex.raw(
          `SELECT setval('"users_id_seq"', (SELECT MAX("id") FROM "users"))`
        )
      )
  }