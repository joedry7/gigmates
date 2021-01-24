import knex from '../server/knex';

const createUsersTable = async () => {
  try {
    await knex.raw('DROP TABLE IF EXISTS users CASCADE');
    await knex.schema.createTable('users', (table) => {
      table.increments('id')
        .primary();
      table.string('username', 25);
      table.string('first_name', 25);
      table.string('last_name', 25);
    });
  } catch (err) {
    console.log(`Error creating Users tables: ${err}`);
  }
};

const createPostsTable = async () => {
  try {
    await knex.schema.dropTableIfExists('posts');
    await knex.schema.createTable('posts', (table) => {
      table.increments('id')
        .primary();
      table.integer('user_id')
        .unsigned();
      table.foreign('user_id')
        .references('users.id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.text('content');
      table.timestamps(false, true);
    });
  } catch (err) {
    console.log(`Error creating posts table: ${err}`);
  }
};

const buildSchema = async () => {
  try {
    await createUsersTable();
    await createPostsTable();
  } catch (err) {
    console.log(`Error building schema: ${err}`);
  } finally {
    await knex.destroy();
    console.log('Schema finished');
  }
};

buildSchema();
