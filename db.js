const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/nonoresume", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const User = require("./models/userModel");

const getUsers = function () {
  return User.find();
};

const addUser = function (user) {
  const newUser = new User(user);
  return newUser.save();
};

const updateUser = function (id, updatedUser) {
  return User.findByIdAndUpdate(id, updatedUser, { new: true });
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getUsers,
  addUser,
  updateUser,
  deleteUser,
};
