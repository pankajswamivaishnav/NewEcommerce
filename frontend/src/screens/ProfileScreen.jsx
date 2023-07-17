import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Errormsg from "../components/shared/Errormsg";
import Loader from "../components/shared/Loader";
import { getUserDetails, userUpdateProfile } from "../actions/userAction";

const ProfileScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, user } = userDetails;
  const { userInfo } = userLogin;

  const updateProfile = useSelector((state) => state.updateProfile);
  const { success } = updateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [navigate, userInfo, user, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userUpdateProfile({ id: user._id, name, email, password }));
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Errormsg variant="danger" message={error}></Errormsg>
      ) : (
        <Row>
          <Col md={3}>
            {success && (
              <Errormsg
                variant="success"
                message={"Update succssfully"}
              ></Errormsg>
            )}
            <h1>Update Information</h1>
            <Form onSubmit={submitHandler}>
              {/* Name Feild */}
              <Form.Group controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                ></Form.Control>
              </Form.Group>
              <Button type="submit" variant="primary my-2">
                Update
              </Button>
            </Form>
          </Col>
          <Col md={9}>
            <h1>My Orders</h1>
          </Col>
        </Row>
      )}
    </>
  );
};

export default ProfileScreen;
