const express = require("express");
const {fetchAllProducts,fetchProductById} = require("../controllers/products");
const productRoute = express.Router();

// fecth all products
productRoute.get("/", fetchAllProducts);
// fecth product by id
productRoute.get("/:id", fetchProductById);

module.exports = productRoute;
