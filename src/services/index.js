// import users from './users/users.model.js';

// export function services(app) {
//   users(app);
// }

import users from './users/users.service.js';

export function services(app) {
  app.configure(users);
}
