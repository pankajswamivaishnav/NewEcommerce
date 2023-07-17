import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/shared/Loader";
import Errormsg from "../components/shared/Errormsg";
import {
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
  Form,
} from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import Rating from "../components/Rating";
import { listProductDetails } from "../actions/productsAction";

// function has been start
const ProductDetails = () => {
  // set Qunatity of product
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  // Reducers function fatching start
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  // Cart function when click on add to cart button
  const navigate = useNavigate();
  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };
  return (
    <div>
      <Link to="/">
        <i className="fa-solid fa-circle-arrow-left"></i>&nbsp; BACK
      </Link>

      {loading ? (
        <Loader />
      ) : error ? (
        <Errormsg variant="danger" message={error}></Errormsg>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup>
              <ListGroupItem>
                <h3>{product.name}</h3>
              </ListGroupItem>
              <ListGroupItem>
                <Rating
                  value={product.rating}
                  text={` ${product.numReviews} Reviews`}
                />
              </ListGroupItem>
              <ListGroupItem>Price : $ {product.price}</ListGroupItem>
              <ListGroupItem>{product.description}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroupItem>
              <Row>
                <Col>Status : </Col>
                <Col>
                  {product.countInStock >= 0 ? "In Stock" : "Out Of Stock"}
                </Col>
              </Row>
            </ListGroupItem>
            {product.countInStock > 0 && (
              <ListGroupItem>
                <Row>
                  <Col>Qty</Col>
                  <Form.Control
                    as="select"
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Row>
              </ListGroupItem>
            )}
            <ListGroupItem>
              <Button
                className="btn-block"
                type="button"
                onClick={addToCartHandler}
              >
                Add to cart
              </Button>
            </ListGroupItem>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductDetails;
