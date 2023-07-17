const Products = require("../models/Product");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    console.log("Products not found ", error);
  }
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

module.exports = { getProducts, getProduct };
