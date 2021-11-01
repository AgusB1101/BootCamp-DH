const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

console.clear();

app.use(express.static("public"));

app.listen(PORT, () => console.log("Running server in port " + PORT));

app.get("/", (_, res) =>
  res.sendFile(path.join(__dirname, "views/index.html"))
);

app.get("/babbage", (_, res) =>
  res.sendFile(path.join(__dirname, "views/babbage.html"))
);

app.get("/berners-lee", (_, res) =>
  res.sendFile(path.join(__dirname, "views/berners-lee.html"))
);

app.get("/clarke", (_, res) =>
  res.sendFile(path.join(__dirname, "views/clarke.html"))
);

app.get("/hamilton", (_, res) =>
  res.sendFile(path.join(__dirname, "views/hamilton.html"))
);

app.get("/hopper", (_, res) =>
  res.sendFile(path.join(__dirname, "views/hopper.html"))
);

app.get("/lovelace", (_, res) =>
  res.sendFile(path.join(__dirname, "views/lovelace.html"))
);

app.get("/turing", (_, res) =>
  res.sendFile(path.join(__dirname, "views/turing.html"))
);
