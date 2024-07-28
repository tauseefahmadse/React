const products = require("../data/products");

const fetchAllProducts = (req, res) => {
  try {
    res.send(products);
    //console.log(umais)
  } catch (error) {
    console.log(error.message);
    res.send(error.message);
  }
};

const fetchProductById = (req, res) => {
  const id = req.params.id;
  const product = products.find((prod) => prod.id == id);
  if (product) {
    // res.json(product);
    res.send(product.brand + " " +product.title);
  } else {
    //res.send(`product not found ${id}`);
    res.status(404).send(`product not found with given id: ${id}`);
  }
  res.send(products);
};

module.exports = {
  fetchAllProducts,
  fetchProductById,
};
