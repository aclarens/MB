'use strict'
var mongoose = require('mongoose');

var app = require('./app.js');
var port = process.env.port || 3679;

//Conexión con la base de datos
mongoose.connect('mongodb://localhost:27017/mutantesDb', { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log("Conexion a la base Mongo OK")
        app.listen(port, () => { //puerto por donde va a escuchar 
            console.log(`Escuchando en el puerto ${port}`);
        });
    }
});