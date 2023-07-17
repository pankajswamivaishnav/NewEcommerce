const express = require("express");
const {
  authController,
  getUserProfile,
  registerUser,
  updateUserProfile,
} = require("../controllers/usersController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

// Register User
router.route("/users").post(registerUser);
// Post Email and Password In to DB
router.route("/login").post(authController);
// Get User Profile Private Route
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// Register User
router.route("/register").post(registerUser);
module.exports = router;
