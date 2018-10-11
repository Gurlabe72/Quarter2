module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        database: 'Trucker'
      },
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds'
      }
    }}