const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

console.clear();

app.use(express.static("public"));

app.listen(PORT, () => console.log("Server listening on port " + PORT));

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "/views/home.html"))
);
