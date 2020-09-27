const { validSignUpDetails } = require("./helpers");

const express = require("express");

const app = express();
app.use(express.json());

const db = require("./db");

const bcrypt = require("bcrypt");

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

app.post("/signup", (req, res, next) => {
  if (validSignUpDetails(req.body)) {
    db.getUserByEmail(req.body.email).then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10).then((hash) => {
          db.addUser({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
          }).then((user) => {
            res.send(user);
          });
        });
      } else {
        next(new Error("Email In Use"));
      }
    });
  } else {
    next(new Error("Invalid User Details"));
  }
});

app.post("/signin", (req, res, next) => {
  db.getUserByEmail(req.body.email).then((user) => {
    if (user) {
      bcrypt.compare(req.body.password, user.password).then((result) => {
        if (result) {
          res.json({
            message: "Signed In",
          });
        } else {
          next(new Error("Invalid Sign In"));
        }
      });
    } else {
      next(new Error("Invalid Sign In"));
    }
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: req.app.get("env") === "development" ? err : {},
  });
});

module.exports = { setupExpressServer };
