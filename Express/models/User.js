const fetch = require("node-fetch");

const User = {
  getUsers: () => fetch("https://reqres.in/api/users"),
};

module.exports = User;
