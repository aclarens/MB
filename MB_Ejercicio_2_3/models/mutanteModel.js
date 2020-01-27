'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mutanteSchema = Schema({
    adn: {},
});

module.exports = mongoose.model('Mutante', mutanteSchema);