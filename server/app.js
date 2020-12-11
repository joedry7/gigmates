const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/api/user', routes.user);

module.exports = app;