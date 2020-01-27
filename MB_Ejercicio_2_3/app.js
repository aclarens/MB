'use strict'

//Configuraciones
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let api = require('./routes/mutanteRoutes');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const inspector = require('inspector');

const mutant = require('./controllers/mutante.js');

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, X-Requested-with, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/api', api);

module.exports = app;