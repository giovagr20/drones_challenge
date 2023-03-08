const express = require('express');
const {PORT} = require('./infrastructure/utils/utils');
const DB = require('./infrastructure/database/database');
const app = express();

//Instances modules
const _serviceTheDroneController = require('./application/adapters/controller/service_thedrone_controller');

//Middlewares
app.use(express.urlencoded({extended: false}));
DB();

app.use('/api', _serviceTheDroneController);

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});