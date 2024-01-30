import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";

import ProductModalUpdate from "./ProductModalUpdate";
import { deleteProducts } from "../actions/productActions";

function ProductCard({ product, isUpdate, setIsUpdate }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
 
  const handleDeleteProduct = (prodId) => {
    dispatch(deleteProducts(prodId));
  };
  return (
    <React.Fragment>
      <div>
        <Card style={{ width: "18rem", height: "100%" }}>
          <Card.Img variant="top" src={product.image} width={200} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.desc}</Card.Text>
            <Card.Text>{product.price}</Card.Text>
            <Card.Text>{product.qty}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button color="primary" onClick={() => setIsOpen(true)} width={200}>
              update
            </Button>
            <Button
              className="mt-2"
              color="danger"
              onClick={() => handleDeleteProduct(product._id)}
            >
              delete
            </Button>
          </Card.Footer>
        </Card>
      </div>
      {isOpen ? (
        <ProductModalUpdate
          product={product}
          show={isOpen}
          setShow={setIsOpen}
          isUpdate={isUpdate}
          setIsUpdate={setIsUpdate}
        />
      ) : null}
    </React.Fragment>
  );
}

export default ProductCard;
