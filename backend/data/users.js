const bcrypt = require("bcryptjs");
const users = [
  {
    name: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "pankaj",
    email: "pankaj@pankaj.com",
    password: bcrypt.hashSync("12345", 10),
  },
  {
    name: "user",
    email: "user@xyz.com",
    password: bcrypt.hashSync("12345", 10),
  },
];

module.exports = users;
