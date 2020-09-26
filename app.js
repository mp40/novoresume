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

app.get("/users/:id", (req, res) => {
  db.getUsers().then((users) => {
    res.send(
      users.find((user) => {
        return user._id === req.params.id;
      })
    );
  });
});

app.post("/users", (req, res) => {
  db.addUser(req.body).then((user) => {
    res.send(user);
  });
});

app.put("/users/:id", (req, res) => {
  db.updateUser(req.params.id, req.body).then(() => {
    res.send();
  });
});

app.delete("/users/:id", (req, res) => {
  db.deleteUser(req.params.id).then(() => {
    res.send();
  });
});

module.exports = { setupExpressServer };
