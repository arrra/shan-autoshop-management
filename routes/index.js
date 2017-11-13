const customers = require('./customers');

const attachRoutes = (app) => {
  app.use('/customers',  customers);
};

module.exports = {
  attachRoutes,
};
