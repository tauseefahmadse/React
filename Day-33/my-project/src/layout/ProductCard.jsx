import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// object as props 
const ProductCard = ({product}) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
          <h4><b>Price:</b> {product.price} $</h4>
          </Card.Text>
          <Link to={`/product/${product.id}`}>
              <Button variant="primary">Add to Cart </Button>
          </Link>
        </Card.Body>
      </Card> 
    </Col>
  );
};

export default ProductCard;
