"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    PORT: 3000,
    knex: {
        client: 'pg',
        connection: {
            database: 'gigmates',
            user: 'postgres',
            password: 'password',
        },
    },
};
exports.default = config;
