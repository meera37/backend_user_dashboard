// import { app } from './app.js'
// import { logger } from './logger.js'

// const port = app.get('port')
// const host = app.get('host')

// process.on('unhandledRejection', reason => logger.error('Unhandled Rejection %O', reason))

// app.listen(port).then(() => {
//   logger.info(`Feathers app listening on http://${host}:${port}`)
// })

import { app } from './app.js';
import { logger } from './logger.js';
import knex from 'knex';
import config from '../knexfile.js';

const port = app.get('port');
const host = app.get('host');

process.on('unhandledRejection', reason =>
  logger.error('Unhandled Rejection %O', reason)
);

// Initialize knex
const db = knex(config[process.env.NODE_ENV || 'development']);

// Run migrations, then start server
db.migrate.latest()
  .then(() => {
    logger.info('Migrations are up to date');

    app.listen(port).then(() => {
      logger.info(`Feathers app listening on http://${host}:${port}`);
    });
  })
  .catch(err => {
    logger.error('Migration failed', err);
    process.exit(1); // stop process if migration fails
  });
