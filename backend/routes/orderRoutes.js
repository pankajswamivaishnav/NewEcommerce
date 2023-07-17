const express = require("express");
const { addOrderItem } = require("../controllers/orderController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

//create new order
router.route("/orders").post(protect, addOrderItem);

module.exports = router;
