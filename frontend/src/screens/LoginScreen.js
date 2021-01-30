import React from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";

import SmallContainer from "../components/SmallContainer";

const RegisterScreen = () => {
  return (
    <SmallContainer>
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Need an account?
          <Link to="/register"> Register</Link>
        </Col>
      </Row>
    </SmallContainer>
  );
};

export default RegisterScreen;
