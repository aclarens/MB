'use strict'

let algoritmo = require('./algoritmoMutante.js');

let miMatriz = [];
let matrizApi = [];

//CREO LA MATRIZ
function esMutante(arrayAdn) {
    arrayAdn.forEach((adn) => {
        let temp = [];
        for (let i = 0; i <= adn.length - 1; i++)
            temp.push(adn[i]);
        miMatriz.push(temp);
    });
    console.log("Base nitrogenada del ADN a analizar: ")
    console.log(miMatriz);
    algoritmo.algoritmoVerSiEsMutante(miMatriz);
}

module.exports = {
    esMutante
}