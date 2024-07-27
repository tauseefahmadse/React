const express = require("express");
const productRoute = express.Router();

// mongodb database
const products = [
  {
    id:1,
    title: "Iphone pro",
    brand : "Apple",
    price: "4 million"
  },
  {
    id:2,
    title: "Inpiron",
    brand : "Dell",
    price: "1.5 million"
  }
];

productRoute.get("/products", (req,res)=>{
res.send(products);
});

productRoute.get("/products/:id", (req,res)=>{
  const id = req.params.id;
  const product = products.find(prod => prod.id==id)
  if(product){
    res.json(product)
  }else{
    res.send(`product not found ${id}`);
  }
  res.send(products);
  });




module.exports = productRoute;