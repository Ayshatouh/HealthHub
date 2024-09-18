import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../Styles/PatientLogin.css'; // Import your custom styles
import { useNavigate } from 'react-router';

const PatientLogin = () => {

  const navigate = useNavigate();
  const handeClick = ()=>{
    navigate('/patientDash');
  }
    return (
    <Container className="login-container">
      <Row className="justify-content-center">
        <Col md="6" lg="4">
          <div className="login-box">
            <h2 className="text-center txt-color">Patient Login</h2>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </FormGroup>
              <div className="text-right">
                <a href="#forgot-password" className="forgot-link">
                  Forgot password?
                </a>
              </div>
              <Button  block className="mt-3 btn" onClick={handeClick} >Login</Button>
            </Form>
            <p className="signup-text text-center mt-3">
              Don't have an account? <a href="#signup">Sign up</a>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PatientLogin;
