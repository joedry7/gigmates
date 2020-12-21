const knex = require('../../server/knex');

module.exports = {

  getUser: (id) => knex('users').select().where({ id }),

  addUser: (user) => knex('users').insert(user, '*'),

  deleteUser: (id) => knex('users').where({ id }).del('*'),

};
