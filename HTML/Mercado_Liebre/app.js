const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

console.clear();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.listen(PORT, () => console.log("Server listening on port " + PORT));

app.get("/", (_, res) => res.render("home"));

app.get("/register", (_, res) => {
  res.render("register");
});

app.get("/login", (_, res) => {
  res.render("login");
});
