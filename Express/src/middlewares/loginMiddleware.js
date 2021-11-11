const { check } = require("express-validator");

const middleware = [
  check("email")
    .notEmpty()
    .withMessage("Debe completar con un email")
    .bail()
    .isEmail()
    .withMessage("Debe completar con un email válido"),
  check("pwd").notEmpty().withMessage("Debe completar con una contraseña"),
];

module.exports = middleware;
