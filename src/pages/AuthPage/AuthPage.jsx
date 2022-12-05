import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <h1>AuthPage</h1>
      Login:
          <LoginForm setUser={setUser} />
          Don't have an account? 
          <br></br>
          <br></br>
          Sign up:
          <SignUpForm setUser={setUser} />


    </>
  );
}