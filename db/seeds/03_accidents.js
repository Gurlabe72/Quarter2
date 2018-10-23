exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('accidents')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('accidents').insert([
          {
            id:101,
            hazards_id:201,
            comment: 'tis is my comment'
          },
          {
            id:102,
            hazards_id:202,
            comment: 'this is my comment'
          },
          {
            id:103,
            hazards_id:203,
            comment: 'this is my comment'
          },
          {
            id:104,
            hazards_id:204,
            comment: 'this is my comment'
          }
        ])
      })
      .then(() =>
     knex.raw(
       `SELECT setval('"accidents_id_seq"', (SELECT MAX("id") FROM "accidents"))`
     )
   )
  }