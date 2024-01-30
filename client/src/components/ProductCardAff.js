import React from "react";
import Card from "react-bootstrap/Card";
const ProductCardAff = ({ product }) => {
  return (
    <div className="d-flex flex-column">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} width={200} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.desc}</Card.Text>
          <Card.Text>{product.price}</Card.Text>
          <Card.Text>{product.qty}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <button className="btn">Buy</button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default ProductCardAff;
