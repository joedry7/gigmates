module.exports = {

  PORT: 3000,
  knex: {
    client: 'pg',
    connection: {
      database: 'gigmates',
      user: 'postgres',
      password: 'password'
    }
  }

};