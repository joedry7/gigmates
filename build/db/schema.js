"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("../server/knex"));
const createUsersTable = () => knex_1.default.raw('DROP TABLE IF EXISTS users CASCADE')
    .then(() => knex_1.default.schema.createTable('users', (table) => {
    table.increments('id')
        .primary();
    table.string('username', 25);
    table.string('first_name', 25);
    table.string('last_name', 25);
}))
    .catch((err) => {
    console.log(`Error creating users table: ${err}`);
});
const createPostsTable = () => knex_1.default.schema.dropTableIfExists('posts')
    .then(() => knex_1.default.schema.createTable('posts', (table) => {
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
}))
    .catch((err) => {
    console.log(`Error creating posts table: ${err}`);
});
const buildSchema = () => new Promise((res) => res())
    .then(createUsersTable)
    .then(createPostsTable)
    .catch((err) => console.log(`Error building schema: ${err}`))
    .then(() => knex_1.default.destroy(() => console.log('Schema finished')));
buildSchema();
