import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartAction";
import { useParams, useLocation, Link } from "react-router-dom";
import {
  Row,
  Col,
  Button,
  Form,
  Image,
  ListGroup,
  Card,
  ListGroupItem,
} from "react-bootstrap";

const CartScreen = () => {
  // const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  // subtotal of product items
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // Calculate total quantity
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // remove functionality
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };
  // const checkout = () => {
  //   navigate("/login?redirect=shipping");
  // };
  return (
    <>
      <Row>
        <Col md={8}>
          <h1>Shipping Cart</h1>
          {cartItems.length === 0 ? (
            <h6>
              Your Cart is Empty ! <Link to="/">Go Back</Link>
            </h6>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <ListGroupItem key={index}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        <i
                          className="fa fa-trash text-danger"
                          aria-hidden="true"
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Sub-Total : {totalQty}</Card.Title>
              <Card.Text>${subtotal.toFixed(2)}</Card.Text>
              <Link to="/shipping">
                <Button variant="primary" className="rounded">
                  PROCEED TO CHECKOUT
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default CartScreen;
