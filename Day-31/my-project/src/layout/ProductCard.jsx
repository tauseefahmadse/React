import React from "react";
import { Card, Button, Col } from "react-bootstrap";


const ProductCard = (props) => {
  return (
    <Col>
      <Card style={{ width: "18rem" }} className="mb-2">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
          <h4><b>Price:</b> {props.price} $</h4>
          </Card.Text>
          <Button variant="primary">Add to Cart </Button>
        </Card.Body>
      </Card> 
    </Col>
  );
};

export default ProductCard;
