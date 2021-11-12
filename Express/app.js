const express = require("express");
const session = require("express-session");
const mainRoutes = require("./src/routes/mainRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();

console.clear();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({ secret: "This is a secret", resave: true, saveUninitialized: true })
);

app.use("/", mainRoutes);
app.use("/users", userRoutes);

app.listen(3000, () => console.log("Server listening on port 3000"));
