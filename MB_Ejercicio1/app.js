'use strict'

const mutant = require('./controllers/mutante.js');

//Secuencia para probar un mutante
let adn = ["ATGCGA", "CAGTGC", "TTATGT", "AGAAGG", "CCCCTA", "TCACTG"];

//Secuencia para probar un NO mutante
//let adn = ["ATGCGA", "CAGTGC", "TTATTT", "AGACGG", "GCGTCA", "TCACTG"]

mutant.esMutante(adn);