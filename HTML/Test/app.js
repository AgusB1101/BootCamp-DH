const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000 || process.env;

console.clear();

app.use(express.static("public"));

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "./views/home.html"))
);

app.listen(PORT, () => console.log("Running server in port " + PORT));
