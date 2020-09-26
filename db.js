const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://localhost:27017/nonoresume");

const User = require("./models/userModel");

const getUsers = function () {
  return User.find();
};

module.exports = {
  getUsers,
};
