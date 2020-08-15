'use strict'

//Cargar módulos de node para crear el servidor
var express = require('express');
var bodyParser = require('body-parser');

//Eejecutar express (http)
var app = express();

//MiddLewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json()); //Convertir cualquier tipo de petición a json


//CORS (Acceso cruzado entre dominios)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//Exportar modulo (fichero actual)
module.exports = app;