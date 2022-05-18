//Módulos
const express = require("express");
const rutas = express.Router();
const controller = require("../controllers/controllerRestaurantes");
const path = require("path");
const multer = require("multer");
//let logintMiddleware = require("../middlewares/loginMiddleware");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img"));
  },
  filename: function (req, file, cb) {
    const newFileName =
      file.fieldname + "-" + Date.now() + path.extname(file.originalname);
    cb(null, newFileName);
  },
});

var upload = multer({ storage });

//Rutas Restaurantes
rutas.get("/", controller.index);
//Crear Producto
rutas.get("/create", controller.create);
rutas.post("/create/:restaurant", upload.any('img-restaurant'), controller.store);
//Editar Producto
rutas.get("/edit/:id", controller.edit);
rutas.put("/edit/:restaurant", upload.any('img-restaurant'), controller.update);

//Eliminar
rutas.delete("/delete/:id", controller.destroy);

module.exports = rutas;
