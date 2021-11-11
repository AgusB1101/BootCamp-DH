const { check } = require("express-validator");

const middleware = [
  check("name")
    .notEmpty()
    .withMessage("Debe completar con un nombre")
    .bail()
    .isLength({ min: 6 })
    .withMessage("El nombre debe contener como mínimo 6 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("Debe completar con un email")
    .bail()
    .isEmail()
    .withMessage("Debe completar con un email válido"),
  check("pwd")
    .notEmpty()
    .withMessage("Debe completar con una contraseña")
    .bail()
    .isLength({ min: 6 })
    .withMessage("La contraseña debe contener como mínimo 6 caracteres"),
];

module.exports = middleware;
