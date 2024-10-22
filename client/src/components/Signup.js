import React from 'react';
import '../styles/Signup.css';

function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1>Prestige Properties</h1>
        <form>
          <input type="text" placeholder="Email" className="input-field" />
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="signup-btn">Sign Up</button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="signup-fb">Sign up with Facebook</button>
      </div>
      <div className="login-link">
        <p>Have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}

export default Signup;
