require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connection Successfull");
  })
  .catch((err) => {
    console.log("No connection");
  });
