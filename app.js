const express = require("express");

const app = express();
app.use(express.json());

const db = require("./db");

const setupExpressServer = () => {
  return app;
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  db.getUsers().then((users) => {
    res.send({ results: users });
  });
});

module.exports = { setupExpressServer };
