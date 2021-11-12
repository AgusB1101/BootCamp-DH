const User = require("../../models/User");

const controller = {
  getUsers: async (req, res) => {
    const response = await User.getUsers();
    const data = await response.json();

    res.render("users", { users: data.data });
  },

  getParticularUser: (req, res) => {
    const userId = req.params.id;
    User.getUsers()
      .then((response) => response.json())
      .then((data) => {
        const user = data.data.find((u) => u.id == userId);
        res.render("user", { user });
      });
  },
};

module.exports = controller;
