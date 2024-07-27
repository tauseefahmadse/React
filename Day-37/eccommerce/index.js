// import express
const express = require("express");
// initalize express
const app = express();
// call express get , listen functions

app.get("/", (req, res) => {
  res.send("<h1>Test Api</h1>");
});

app.get("/products", (req, res) => {
  res.send("<h1>products</h1>");
});

app.get("/login", (req, res) => {
  res.send("<h1> hey login </h1>");
});

app.get("/address/:city/:name/:address", (req, res) => {
  //instead this

  /*const city = req.params.city;
  const name = req.params.name;
  const address = req.params.address;*/

  // we use this
  const { city, name, address } = req.params;
  res.send(
    `hi my name is ${name} you live in ${city}  my address is ${address}`
  );
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
