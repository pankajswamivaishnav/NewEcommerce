import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "../components/shared/FormContainer";
import { saveShippingAddress } from "../actions/cartAction";
import CheckoutStep from "../components/shared/CheckoutStep";
const ShippingScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch()
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <div>
      <FormContainer>
        <CheckoutStep step1 step2 />
        <Form onSubmit={submitHandler}>
          {/* Address */}
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              name="address"
              required={true}
            ></Form.Control>
          </Form.Group>
          {/* City */}
          <Form.Group controlId="city">
            <Form.Label>city</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              name="city"
              required={true}
            ></Form.Control>
          </Form.Group>
          {/* PostalCode */}
          <Form.Group controlId="postalCode">
            <Form.Label>postalCode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              name="postalCode"
              required={true}
            ></Form.Control>
          </Form.Group>
          {/* Country */}
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Your country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              name="country"
              required={true}
            ></Form.Control>
          </Form.Group>
          <Button className="my-2" type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default ShippingScreen;
