const express = require("express");
const morgan = require("morgan");
const app = express();

// test api
//      endpoint ,  callback function
app.get("/api/v1", (req, res) => {
  res.send("<h1>Test Api is runnnig on 8000</h1>");
});

// allow incoming JSON data postman/html form/react form
//middleware
app.use(express.json());
// morgan
// to check wether api exist or not
app.use(morgan("dev"));
//  routes
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");

// product middlewear
app.use("/api/v1/products", productRoute);

// auth middleware
app.use("/api/v1/users", authRoute);

// start the server on port 8000
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});

const dbConnect = require("./config/db");

dbConnect();
