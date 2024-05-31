require("dotenv").config();
const mongoose = require("mongoose");
mongoose
  // .connect("mongodb://0.0.0.0:27017/eCommerceData")
  .connect(process.env.MONGO)
  .then(() => {
    console.log(`Connection established`);
  })
  .catch((err) => {
    console.log("No connection");
  });
