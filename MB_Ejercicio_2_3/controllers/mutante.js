'use strict'

let Mutante = require('../models/mutanteModel');
let algoritmo = require('./algoritmoMutante.js');

let matrizApi = [];
let jsonRatio = {};

//Obtener un solo mutante (pasarle el id de Mongo)
function getUnMutante(req, res) {
    var mutanteId = req.params.id;

    Mutante.findById(mutanteId, function(err, mutante) {
        if (err) {
            res.status(500).send({ message: 'Error al devolver el mutante' });
        } else {
            if (!mutante) {
                res.status(404).send({ message: 'No hay mutante' });
            } else {
                res.status(200).send({ mutante });
            }
        }
    });
}

//Obtener todos los mutantes de la base oredenados por fecha de ingreso
async function getMutantes(req, res) {
    await Mutante.find({}).sort('_id').exec((err, mutantes) => {
        if (err) {
            res.status(500).send({ message: 'Error al devolver los mutantes' });
        } else {
            if (!mutantes) {
                res.status(404).send({ message: 'No hay mutantes' });
            } else {
                res.status(200).send({ mutantes });
            }
        }
    });
}

//Guardar mutantes en la base de datos
function guardarMutante(req, res) {
    let mutante = new Mutante();
    let params = req.body;

    params.dna.forEach((adn) => {
        let temp = [];
        for (let i = 0; i <= adn.length - 1; i++)
            temp.push(adn[i]);
        matrizApi.push(temp);
    });
    console.log("Base nitrogenada pasada por POST");
    console.log(matrizApi);

    algoritmo.algoritmoVerSiEsMutante(matrizApi);
    mutante.adn = algoritmo.adnMutantes;

    mutante.save((err, mutanteStored) => {
        if (err) {
            console.log(err);
            res.status(500).send({ message: 'Error al guardar el mutante' });
        } else if (mutante.adn == "" || mutante.adn == undefined) {
            res.status(403).send({ message: 'No hay mutantes' });
        } else {
            res.status(200).send({ mutante: mutanteStored, message: 'Existe mutante' });
            algoritmo.adnMutantes = [];
        }
    });

    matrizApi = [];
}

module.exports = {
    getUnMutante,
    getMutantes,
    guardarMutante
}