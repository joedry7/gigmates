"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = __importDefault(require("../../server/knex"));
exports.default = {
    getUser: (id) => knex_1.default('users').select().where({ id }),
    addUser: (user) => knex_1.default('users').insert(user, '*'),
    deleteUser: (id) => knex_1.default('users').where({ id }).del('*'),
};
