import React from 'react';
import '../styles/Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Prestige Properties</h1>
        <form>
          <input type="text" placeholder="Username" className="input-field" />
          <input type="password" placeholder="Password" className="input-field" />
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="login-fb">Log in with Facebook</button>
        <p className="forgot-password">Forgot password?</p>
      </div>
      <div className="signup-link">
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
