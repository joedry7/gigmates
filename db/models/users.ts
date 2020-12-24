import { default as knex } from '../../server/knex';

interface User {
  username: string;
  first_name: string;
  last_name: string;
}

export default {

  getUser: async (id: number) => await knex('users').select().where({ id }),

  addUser: async (user: User) => await knex('users').insert(user, '*'),

  deleteUser: async (id: number) => await knex('users').where({ id }).del('*'),

};
