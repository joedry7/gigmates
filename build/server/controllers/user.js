"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../../db/models/users"));
exports.default = {
    getUser: (req, res) => {
        const { id } = req.params;
        users_1.default.getUser(Number(id))
            .then((user) => {
            res.send(user);
        })
            .catch(() => {
            res.status(500).send(`An error occurred fetching user: ${id}`);
        });
    },
    addUser: (req, res) => {
        const user = req.body;
        users_1.default.addUser(user)
            .then((newUser) => {
            res.send(newUser);
        })
            .catch(() => {
            res.status(500).send('An error occurred adding this user');
        });
    },
    deleteUser: (req, res) => {
        const { id } = req.params;
        users_1.default.deleteUser(Number(id))
            .then((user) => {
            res.send(user);
        })
            .catch(() => {
            res.status(500).send(`An error occurred deleting user: ${id}`);
        });
    },
};
