const app = require('./server/app');
const config = require('./config');

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}`));
