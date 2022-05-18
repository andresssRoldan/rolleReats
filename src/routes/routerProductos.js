//Módulos

const express = require("express");
const rutas = express.Router();
const controller = require("../controllers/controllerProductos");

//Rutas Productos
//rutas.get("/carro", controller.carro);
//rutas.get("/create", controller.creacionProducto);

rutas.get("/", controller.index);
// rutas create
rutas.get("/create", controller.create);
rutas.post("/create/:product", controller.put);
// Rutas actualizar
rutas.get("/update/:id", controller.update);
rutas.put("/update/:product", controller.store);
// Ruta eliminar
rutas.delete("/delete/:id", controller.destroy);


module.exports = rutas;
