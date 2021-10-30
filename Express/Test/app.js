import express from "express";
const app = express();
const PORT = 3000 || process.env;

console.clear();

app.get("/", (_, res) => res.send("Hello World!"));

app.listen(PORT, () => console.log("Running server in port " + PORT));
