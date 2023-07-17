require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT;
const { errorHandler } = require("./middlewares/errorMiddlewares");
// Route Defined
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

require("dotenv").config();
// Mongodb configuration
require("./db/conn");
// Middleware and routes
app.use(cors());
app.use(productRoutes);
app.use(errorHandler);
app.use(express.json()); //Body - Parser For req,res
app.use(userRoutes);
app.use(orderRoutes);

// static Files
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(port, (req, res) => {
  console.log(`I am listening at port number ${process.env.PORT} `);
});
