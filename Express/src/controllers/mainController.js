const { validationResult } = require("express-validator");
const fs = require("fs");

const controller = {
  getIndex: (_, res) => {
    res.render("index");
  },

  getRegister: (_, res) => {
    res.render("register");
  },

  postRegister: (req, res) => {
    let errors = validationResult(req);
    if (errors.errors.length != 0)
      res.render("register", { errors: errors.errors, old: req.body });
    else {
      let users = JSON.parse(fs.readFileSync(__dirname + "/users.json"));

      let idMax = Math.max(...users.map((user) => user.id));
      idMax = idMax === -Infinity ? 1 : idMax;
      console.log(idMax);
      if (!users.find((user) => user.email == req.body.email)) {
        users.push({
          id: idMax + 1,
          name: req.body.name,
          email: req.body.email,
          password: req.body.pwd,
        });
        fs.writeFileSync(__dirname + "/users.json", JSON.stringify(users));
        res.render("register", {
          mensajeDeRegistro: "Se ha creado la cuenta con éxito",
        });
      }

      res.render("register", {
        mensajeDeRegistro: "Ya hay una cuenta con el mail ingresado",
      });
    }
  },

  getLogin: (_, res) => {
    res.render("login");
  },

  postLogin: (req, res) => {
    let errors = validationResult(req);
    if (errors.errors.length != 0)
      res.render("login", { errors: errors.errors, old: req.body });
    else {
      let users = JSON.parse(fs.readFileSync(__dirname + "/users.json"));
      const loggedUser = users.find((user) => user.email == req.body.email);
      if (loggedUser) {
        if (loggedUser.password == req.body.pwd) {
          req.session.loggedUser = loggedUser;
          res.send("Se ha logueado con éxito");
        } else {
          res.render("login", {
            errors: [
              { msg: "La contraseña es la incorrecta. Vuelva a intentar." },
            ],
            old: req.body,
          });
        }
      } else {
        res.render("login", {
          errors: [{ msg: "No existe el mail dentro de la DB." }],
          old: req.body,
        });
      }
    }
  },
};

module.exports = controller;
