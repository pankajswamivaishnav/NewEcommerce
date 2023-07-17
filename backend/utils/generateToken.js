const jwt = require("jsonwebtoken");
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECERT_KEY, {
    expiresIn: "15d",
  });
};

module.exports = { generateToken };
