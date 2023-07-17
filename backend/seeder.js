const mongoose = require("mongoose");
require("dotenv").config();
require("./db/conn");
// files imported
const products = require("./data/products");
const users = require("./data/users");
// model & schema imported
const Order = require("./models/Order");
const Product = require("./models/Product");
const User = require("./models/User");

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    const userData = await User.insertMany(users);
    const userAdmin = userData[0]._id;
    const productData = products.map((product) => {
      return { ...product, user: userAdmin };
    });
    await Product.insertMany(productData);
    console.log("Data Inserted Successfully !!");
    process.exit(0);
  } catch (error) {
    console.log("Not Imported ", error);
    process.exit(1);
  }
};

const dataDistroy = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();
    console.log("Data Destroy Successfully");
    process.exit(0);
  } catch (error) {
    console.log("Cannot Destroy ", error);
  }
};

// console.log(process.argv[2]);
console.log(process.argv[1]);

if (process.argv[2] === "-d") {
  dataDistroy();
} else {
  importData();
}
