const express = require('express');
const {PORT} = require('./infrastructure/utils/utils');
const DB = require('./infrastructure/database/database')
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


//Middlewares
app.use(express.urlencoded({extended: false}));
DB();

app.use

app.listen(PORT, () => {
  console.log('Server started on port 3000');
});