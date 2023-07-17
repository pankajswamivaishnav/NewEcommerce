const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");

// methods has been start
const authController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email Or Password");
  }
});

// User Profile Get Method
const getUserProfile = asyncHandler(async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (e) {
    res.status(404);
    throw new Error("User not found");
  }
});

// Registered users
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existId = await User.findOne({ email });
  if (existId) {
    res.status(400);
    throw new Error("Email Is");
  }
  try {
    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } catch (error) {
    res.status(404);
    throw new Error("User Not Registered");
  }
});

// Update user
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const updateUser = await user.save();
    res.json({
      _id: updateUser.id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
      token: generateToken(updateUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Export methods
module.exports = {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
};
