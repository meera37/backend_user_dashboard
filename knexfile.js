import dotenv from 'dotenv';
dotenv.config();

const baseConfig = {
  client: process.env.DB_CLIENT || 'pg',
  migrations: {
    directory: './migrations'
  }
};

export default {
  development: {
    ...baseConfig,
    connection: {
      host: process.env.DB_HOST || '127.0.0.1',
      port: process.env.DB_PORT || 5432,
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
      ssl: { rejectUnauthorized: false }
    }
  }
};

// import dotenv from 'dotenv';
// dotenv.config();

// export default {
//   development: {
//     client: process.env.DB_CLIENT,
//     connection: {
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME
//     },
//     migrations: {
//       directory: './migrations'
//     }
//   },
//   production: {
//     client: process.env.DB_CLIENT,
//     connection: {
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME,
//       ssl: { rejectUnauthorized: false }
//     },
//     migrations: {
//       directory: './migrations'
//     }
//   }
// };



// require('dotenv').config();

// module.exports = {
//   development: {
//     client: process.env.DB_CLIENT,
//     connection: {
//       host: process.env.DB_HOST,
//       port: process.env.DB_PORT,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME
//     },
//     migrations: {
//       directory: './migrations'
//     }
//   }
// };
