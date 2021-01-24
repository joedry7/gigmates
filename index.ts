import app from './server/app';
import config from './config';

app.listen(config.PORT, config.HOST, () => {
  console.log(`${config.ENV} server is listening at ${config.HOST} port ${config.PORT}`);
});
