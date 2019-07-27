//Env variables
require('dotenv').config();

//Variables
const express      = require('express');
const mongoose     = require('mongoose');
const morgan       = require('morgan');
const path         = require('path');

//Database
mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });
//Settings
const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(morgan('dev'));
app.use(express.json());

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Rutas

const index = require('./routes/index');
app.use('/', index);

const task = require('./routes/task')
app.use('/api/task', task)

module.exports = app;
