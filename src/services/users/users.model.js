import knex from 'knex';
import dotenv from 'dotenv';
dotenv.config();

let db;

export default function(app) {
  if (!db) {
    db = knex({
      client: process.env.DB_CLIENT || 'pg',
      connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
      }
    });
  }

  return db;
}


// import knex from 'knex';
// import KnexService from 'feathers-knex';
// import dotenv from 'dotenv';
// dotenv.config();

// // Setup Knex
// const db = knex({
//   client: process.env.DB_CLIENT || 'pg',
//   connection: {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   }
// });

// // Export function to register service
// export default function(app) {
//   const options = {
//    Model: db,       
//     name: 'users',    
//     paginate: app.get('paginate')

//   };

//   // Register users service
//   app.use('/users', new KnexService(options));
// }
