//Módulos
const express = require("express");
const rutas = express.Router();
const controller = require("../controllers/mainController");

//Rutas Inicio
rutas.get("/", controller.index);


module.exports = rutas;
