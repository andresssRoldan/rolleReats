//Módulos
const express = require("express");
const rutas = express.Router();
const controller = require("../controllers/controllerUsuarios");
const multer = require("multer");
const path = require("path");
const { check } = require("express-validator");
//let guestMiddleware = require("../middlewares/guestMiddleware");
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

//Rutas Users

rutas.get("/", controller.users);

// //Crear
rutas.get("/register", guestMiddleware, controller.register);
rutas.post("/register", upload.single("imagen"),
  [
    check("mail").isEmail().witMesshage("email invalido").bail(),
    check("contraseña")
      .isLength({ min: 8 })
      .withMessage("La contraseña debe tener al menos 8 caracteres")
      .bail(),
  ],
  controller.store
);

//editar
rutas.get("/edit/:id", controller.edit);
rutas.put("/edit/:user", upload.single("imagen"), controller.update);

//delete
rutas.delete("/delete/:id", controller.destroy);

//login
rutas.get("/login", controller.view);
rutas.post("/login",  
  [
    check("email")
      .isEmail()
      .withMessage("email invalido")
      .bail()
      .notEmpty()
      .withMessage("Ingresa tu email")
      .bail(),
    check("password").notEmpty().withMessage("Ingresa tu contraseña").bail(),
  ],
  controller.login
);

module.exports = rutas;
