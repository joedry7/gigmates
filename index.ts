import dotenv from 'dotenv';

// Configure environmental variables
const envConfig = dotenv.config();
if (envConfig.error) console.error(envConfig.error);

import app from './server/app';
import { config } from './config';

app.listen(config.PORT, () => console.log(`Server is listening on port ${config.PORT}`));
