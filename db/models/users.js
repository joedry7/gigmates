const knex = require('../../server/knex');

module.exports = {

  getUser: (id) => knex.select().table('users').where({ id }),

  addUser: (user) => knex('users').insert(user, '*')

}