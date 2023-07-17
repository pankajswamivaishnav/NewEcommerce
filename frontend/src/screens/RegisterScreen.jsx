import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Errormsg from "../components/shared/Errormsg";
import Loader from "../components/shared/Loader";
import { register } from "../actions/userAction";
import FormContainer from "../components/shared/FormContainer";

const RegisterScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    }
    dispatch(register(name, email, password));
    navigate("/profile");
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Errormsg variant="danger" message={message}></Errormsg>
      ) : (
        <FormContainer>
          <h1>Sign Up</h1>
          <Form onSubmit={submitHandler}>
            {/* Name Feild */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
              ></Form.Control>
            </Form.Group>
            {/* Email Feild */}
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
            {/* Confirm Password */}
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Re-enter Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required={true}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary my-2">
              Sign Up
            </Button>
          </Form>
          <Row>
            <Col>
              Already Have An Account ?<Link to="/login">Login</Link>
            </Col>
          </Row>
        </FormContainer>
      )}
    </>
  );
};

export default RegisterScreen;
