const express = require('express');
const { PORT } = require('./infrastructure/utils/utils');
const DB = require('./infrastructure/database/database');
const app = express();

//Instances modules
const _dispatchController = require('./application/adapters/controller/dispatch_controller');

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
DB();

app.use('/api', _dispatchController);

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});