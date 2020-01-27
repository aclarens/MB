'use strict'

var express = require('express');
var mutanteController = require('../controllers/mutante');
var api = express.Router();

api.get('/getunmutante/:id', mutanteController.getUnMutante);
//ej: http://localhost:3679/api/getunmutante/5e2c95f97d1035d233bdfe9f
api.get('/getmutantes', mutanteController.getMutantes);
//ej http://localhost:3679/api/getmutantes
api.get('/stats', mutanteController.getStats);
//ej http://localhost:3679/api/getmutantes
api.post('/mutante', mutanteController.guardarMutante);
//ej: http://localhost:3679/api/mutante


module.exports = api;