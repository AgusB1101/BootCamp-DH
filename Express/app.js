const express = require("express");
const app = express();
const mainRoutes = require("./src/routes/mainRoutes");
const registerRoutes = require("./src/routes/registerRoutes");

console.clear();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", mainRoutes);
app.use("/register", registerRoutes);

app.listen(3000, () => console.log("Server listening on port 3000"));
