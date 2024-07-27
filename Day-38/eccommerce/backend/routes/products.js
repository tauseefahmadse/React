const express = require("express");
const productRoute = express.Router();

// mongodb database
const products = [
  {
    id: 1,
    title: "Iphone pro",
    brand: "Apple",
    price: "4 million",
  },
  {
    id: 2,
    title: "Inpiron",
    brand: "Dell",
    price: "1.5 million",
  },
];

productRoute.get("/", (req, res) => {
  try {
    res.send(products);
    //console.log(umais)
  } catch (error) {
    console.log(error.message)
    res.send(error.message)
  }
});

productRoute.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = products.find((prod) => prod.id == id);
  if (product) {
    res.json(product);
  } else {
    //res.send(`product not found ${id}`);
    res.status(404).send(`product not found with given id: ${id}`);
  }
  res.send(products);
});

module.exports = productRoute;
