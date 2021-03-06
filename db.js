const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/novoresume", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const User = require("./models/userModel");

const getUsers = () => {
  return User.find();
};

const getUserByEmail = (email) => {
  return User.findOne({ email: email });
};

const addUser = (user) => {
  const newUser = new User(user);
  return newUser.save();
};

const updateUser = (id, updatedUser) => {
  return User.findByIdAndUpdate(id, updatedUser, { new: true });
};

const deleteUser = (id) => {
  return User.findByIdAndDelete(id);
};

module.exports = {
  getUsers,
  getUserByEmail,
  addUser,
  updateUser,
  deleteUser,
};
