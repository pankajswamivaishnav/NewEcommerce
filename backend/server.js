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

// async function checkLinks(links) {
//   const invalidLinks = [];

//   for (let i = 0; i < links.length; i++) {
//     const link = links[i];

//     try {
//       const response = await fetch(link, { method: "HEAD" });
//       if (response.status === 404 || response.redirected) {
//         invalidLinks.push(link);
//       }
//     } catch (error) {
//       invalidLinks.push(link);
//     }
//   }

//   return invalidLinks;
// }

// function checkLinksOnPage() {
//   const links = document.getElementsByTagName("a");
//   console.log(links.length);
//   const linksToCheck = [];
//   for (let i = 0; i < links.length; i++) {
//     const linke = links[i].href;
//     linksToCheck.push(linke);
//   }
//   checkLinks(pathsArray)
//     .then((invalidLinks) => {
//       invalidLinks.forEach((link) => {
//         console.log("Invalid Link:", link);
//       });
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//     });
// }

// Call the function to check links when needed
// checkLinksOnPage();

// static Files
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(port, (req, res) => {
  console.log(`I am listening at port number ${process.env.PORT} `);
});
