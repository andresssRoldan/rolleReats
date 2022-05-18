const express = require("express");
const rutas = express.Router();
const controller = require("../controllers/controllerCart");

//Rutas Productos
rutas.get("/cart", controller.cart);
//rutas.get("/create", controller.creacionProducto);


module.exports = rutas;