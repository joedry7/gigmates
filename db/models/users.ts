import { default as knex } from '../../server/knex';

interface User {
  username: string;
  first_name: string;
  last_name: string;
}

export default {

  getUser: (id: number) => knex('users').select().where({ id }),

  addUser: (user: User) => knex('users').insert(user, '*'),

  deleteUser: (id: number) => knex('users').where({ id }).del('*'),

};
