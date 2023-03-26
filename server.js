const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const knex = require("knex");

const app = express();

let initialPath = path.join(__dirname, "webpages");

app.use(bodyParser.json());

app.use(express.static(initialPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(initialPath, "login.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(initialPath, "register.html"));
});

app.listen(3000, (req, res) => {
  console.log("Server is up and running on port 3000");
});
