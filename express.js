const express = require('express');
const bodyParser = require('body-parser');
const router = require('./api/routes/router');

module.exports = () => {
  
  const app = express();
  app.use(bodyParser.json());

  app.use('/api', router)

  return app;

}