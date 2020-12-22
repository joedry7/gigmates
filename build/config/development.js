"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
