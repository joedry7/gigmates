const app = require('./server/app');
const config = require('./config');
const knex = require('./server/knex');

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}`));