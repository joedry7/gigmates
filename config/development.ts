interface Connection {
  database: string;
  user: string;
  password: string;
}

interface Knex {
  client: string;
  connection: Connection;
}

interface Config {
  PORT: number;
  knex: Knex;
}

const config: Config = {

  PORT: 3000,
  knex: {
    client: 'pg',
    connection: {
      database: 'gigmates',
      user: 'postgres',
      password: 'password',
    },
  },

};

export default config;
