const knex = require('../server/knex');

const createUsersTable = () => {
  return knex.raw('DROP TABLE IF EXISTS users CASCADE')
    .then(() => {
      return knex.schema.createTable('users', (table) => {
        table.increments('id')
          .primary();
        table.string('username', 25);
        table.string('first_name', 25);
        table.string('last_name', 25);
      })
        .catch((err) => {
          console.log(`Error creating users table: ${err}`);
        });
    });
};

const createPostsTable = () => {
  return knex.schema.dropTableIfExists('posts')
    .then(() => {
      return knex.schema.createTable('posts', (table) => {
        table.increments('id')
          .primary();
        table.integer('user_id')
          .unsigned();
        table.foreign('user_id')
          .references('users.id')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
        table.text('content');
        table.timestamps(false, true);
      })
        .catch((err) => {
          console.log(`Error creating posts table: ${err}`);
        });
    });
};

const buildSchema = () => {
  return new Promise(res => res())
    .then(createUsersTable)
    .then(createPostsTable)
    .catch((err) => console.log(`Error building schema: ${err}`))
    .then(() => knex.destroy(() => console.log(`Schema finished`)))
};

buildSchema();
