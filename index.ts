import app from './server/app';
import config from './config';

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}`));