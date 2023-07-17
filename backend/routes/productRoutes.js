const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
} = require("../controllers/productsController");

router.route("/products").get(getProducts);
router.route("/products/:id").get(getProduct);

module.exports = router;
