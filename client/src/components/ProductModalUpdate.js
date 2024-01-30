import { useState } from "react";
 import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {  Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import { updateProducts } from "../actions/productActions";

import "bootstrap/dist/css/bootstrap.min.css";

function ProductModalUpdate({ product, show, setShow, isUpdate, setIsUpdate }) {
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);

  const [newProduct, setnewProduct] = useState({ ...product });

  return (
    <Modal isOpen={show} toggle={handleClose} centered>
      <ModalHeader toggle={handleClose}>Modal title</ModalHeader>
      <ModalBody>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>title</Form.Label>
          <Form.Control
            id="title"
            type="text"
            required
            onChange={(e) =>
              setnewProduct({ ...newProduct, title: e.target.value })
            }
            value={newProduct.title}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>description</Form.Label>
          <Form.Control
            id="description"
            type="text"
            required
            onChange={(e) =>
              setnewProduct({ ...newProduct, desc: e.target.value })
            }
            value={newProduct.desc}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>price</Form.Label>
          <Form.Control
            id="price"
            type="number"
            required
            onChange={(e) =>
              setnewProduct({ ...newProduct, price: e.target.value })
            }
            value={newProduct.price}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>quantity</Form.Label>
          <Form.Control
            id="quantity"
            type="number"
            required
            onChange={(e) =>
              setnewProduct({ ...newProduct, qty: e.target.value })
            }
            value={newProduct.qty}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>image</Form.Label>
          <Form.Control
            id="image"
            type="text"
            required
            onChange={(e) =>
              setnewProduct({ ...newProduct, image: e.target.value })
            }
            value={newProduct.image}
          />
        </Form.Group>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="primary"
          width={200}
          onClick={() => {
            dispatch(updateProducts(newProduct));
            setIsUpdate(!isUpdate);
            setShow(false);
          }}
        >
          UPDATE
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ProductModalUpdate;
