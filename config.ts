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
  HOST: string;
  PORT: number;
  knex: Knex;
}
export const config: Config = {

  HOST: process.env.HOST || 'localhost',
  PORT: Number(process.env.PORT) || 3000,
  knex: {
    client: 'pg',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      database: process.env.DB_NAME || 'gigmates',
      user: process.env.DB_USER || 'postgres',
      password: process.env.DB_PASS || '',
    },
  },

};
