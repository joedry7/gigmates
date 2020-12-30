import dotenv from 'dotenv';

// Configure environmental variables
const envConfig = dotenv.config();
if (envConfig.error) console.error(envConfig.error);

interface Connection {
  host: string;
  database: string;
  user: string;
  password: string;
}

interface Knex {
  client: string;
  connection: Connection;
}

interface Config {
  ENV: string;
  HOST: string;
  PORT: number;
  KNEX: Knex;
}
export const config: Config = {

  ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || 'localhost',
  PORT: Number(process.env.PORT) || 3000,
  KNEX: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'gigmates',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || '',
    },
  },

};
