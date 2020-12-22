import { default as knex } from '../../server/knex';

export default {

  getUser: (id) => knex('users').select().where({ id }),

  addUser: (user) => knex('users').insert(user, '*'),

  deleteUser: (id) => knex('users').where({ id }).del('*'),

};
