import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Errormsg from "../components/shared/Errormsg";
import Loader from "../components/shared/Loader";
import { login } from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";

const LoginScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Errormsg variant="danger" message={error}></Errormsg>
      ) : (
        <FormContainer>
          <h1>Sign In</h1>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              ></Form.Control>
            </Form.Group>
            {/* Password Field */}
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required={true}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary my-2">
              Sign In
            </Button>
          </Form>
          <Row>
            <Col>
              New Costumer ?<Link to="/register">Register</Link>
            </Col>
          </Row>
        </FormContainer>
      )}
    </>
  );
};

export default LoginScreen;
