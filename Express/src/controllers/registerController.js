const { validationResult } = require("express-validator");

const controller = {
  getRegister: (_, res) => {
    res.render("register");
  },

  postRegister: (req, res) => {
    let errors = validationResult(req);
    console.log(errors);
    if (errors.errors.length != 0)
      res.render("register", { errors: errors.errors, old: req.body });
    else res.send("OK");
  },
};

module.exports = controller;
