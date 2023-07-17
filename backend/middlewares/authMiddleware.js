const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  );

  try {
    token = req.headers.authorization.split(" ")[1];
    const decode = jwt.verify(token, process.env.SECERT_KEY);
    req.user = await User.findById(decode.id).select("-password");
    next();
  } catch (e) {
    res.status(401);
    throw new Error("Not Authorized User");
  }

  if (!token) {
    res.status(401);
    throw new Error("Invalid Toekn");
  }
});

module.exports = { protect };
