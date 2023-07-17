import React from "react";
//React - Bootstrap & Other packages
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
// Components
import Rating from "../components/Rating";
const ProductScreen = ({ product }) => {
  return (
    <>
      <Card className="my-3 py-3 rounded">
        <Link to={`/product/${product._id}`}>
          <Card.Img src={product.image} variant="top" />
        </Link>
        <Card.Body>
          <Link to={`/product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              value={product.rating}
              text={` ${product.numReviews} Reviews`}
            />
          </Card.Text>
          <Card.Text as="div">$ {product.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductScreen;
