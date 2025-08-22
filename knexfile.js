import dotenv from 'dotenv';
dotenv.config();

const baseConfig = {
  client: process.env.DB_CLIENT,
  migrations: {
    directory: './migrations'
  }
};

export default {
  development: {
    ...baseConfig,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    }
  },
  production: {
    ...baseConfig,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      ssl: { rejectUnauthorized: false } // Important for Render
    }
  }
};
