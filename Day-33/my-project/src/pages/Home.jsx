import React from "react";
import { Row } from "react-bootstrap";
import productRecords from "../data/Products";
import ProductCard from "../layout/ProductCard";

const Home = () => {
  return (
    <Row>
      <h1>Home</h1>
      <p1>Latest Products</p1>
      {productRecords.map((product) => (
        <ProductCard product={product}
          // title={product.title}
          // image={product.image}
          // price={product.price}
        />
      ))}
    </Row>
  );
};

export default Home;
