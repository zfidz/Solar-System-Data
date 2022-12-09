import { useState } from 'react';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className="AuthPage">
      <Row>
        <Col xs={12} sm={8} md={6} lg={4} className="col-6 mx-auto">
          <h1>AuthPage</h1>
          <Form>
            <LoginForm setUser={setUser} />
            <p>Don't have an account?</p>
            <Button onClick={() => setShowSignUp(true)}>Sign up</Button>
          </Form>
          {showSignUp && <SignUpForm setUser={setUser} />}
        </Col>
      </Row>
    </div>
  );
}