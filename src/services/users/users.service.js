import KnexService from 'feathers-knex';
import createModel from './users.model.js';
import { usersHooks } from './users.hooks.js';

export default function(app) {
  const db = createModel(app);

  const options = {
    Model: db,
    name: 'users',
    paginate: app.get('paginate')
  };

  app.use('/users', new KnexService(options));

  const service = app.service('users');
  service.hooks(usersHooks);
}
