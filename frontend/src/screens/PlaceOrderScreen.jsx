import React, { useEffect } from "react";
import { Button, Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { createOrder } from "../actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Errormsg from "../components/shared/Errormsg";
import CheckoutStep from "../components/shared/CheckoutStep";

const PlaceOrderScreen = () => {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const orderCreate = useSelector((state) => state.orderCreate);
  const { success, error } = orderCreate;

  // Calculate total quantity
  const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);

  // subtotal of product items
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shippingPrice = cartItems > 500 ? 0 : 2;
  const tax = Math.round(subtotal * 0.018);
  const GrandTotal = Math.round(subtotal + tax + shippingPrice);

  //   placeOrderHandler
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        itemPrice: cart.itemPrice,
        shippingPrice: shippingPrice,
        taxPrice: tax,
        totalPrice: GrandTotal,
      })
    );
  };

  useEffect(() => {
    if (success) {
      navigate("/");
    }
  }, [navigate, success]);
  return (
    <>
      <CheckoutStep step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Address:</strong>
                {cart.shippingAddress.address}&nbsp;,
                {cart.shippingAddress.city}&nbsp;,
                {cart.shippingAddress.postalCode}&nbsp;,
                {cart.shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>{cart.paymentMethod}</strong>
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Item</h2>
              {cartItems.length === 0 ? (
                <Errormsg
                  variant="danger"
                  message="Your Cart is Empty"
                ></Errormsg>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} X ${item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Order Summary</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Items</Col>
                <Col>{totalQty}</Col>
              </Row>
              <Row>
                <Col>Shipping</Col>
                <Col>${shippingPrice}</Col>
              </Row>
              <Row>
                <Col>Tax</Col>
                <Col>${tax}</Col>
              </Row>
              <Row>
                <Col>Total</Col>
                <Col>${GrandTotal}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              {error && <Errormsg variant="danger" message={error}></Errormsg>}
            </ListGroup.Item>
            <Button
              type="button"
              className="btn-block"
              disabled={cartItems === 0}
              onClick={placeOrderHandler}
            >
              Place Order
            </Button>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrderScreen;
