const express = require("express");
const app = express();
const { check, validationResult } = require("express-validator");

console.clear();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const validateCreateForm = [
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

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", validateCreateForm, (req, res) => {
  let errors = validationResult(req);
  console.log(errors);
  if (errors.errors.length != 0)
    res.render("register", { errors: errors.errors, old: req.body });
  else res.send("OK");
});

app.listen(3000, () => console.log("Server listening on port 3000"));
