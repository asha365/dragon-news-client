import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Helmet } from 'react-helmet';

const Login = () => {
    return (
      <Form>
        <Helmet>
            <title>Dragon News - Login</title>
        </Helmet>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>  */}
      
      <Button variant="primary" type="submit">
        Login
      </Button>
      
      <Form.Text className="text-danger">

      </Form.Text>
    </Form>
    );
};

export default Login;