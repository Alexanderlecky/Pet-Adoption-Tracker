<<<<<<< HEAD
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();  // useNavigate to handle redirection

  const formik = useFormik({
    initialValues: {
      email: '',  // Changed to email
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')  // Email validation
        .required('Email is required'),  // Changed to required email
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')  // Added minimum length validation
        .required('Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        
        const data = await response.json();
        
        if (response.ok) {
          console.log('Login successful:', data);
          navigate('/homepage');  // Redirect to homepage on success
        } else {
          alert('Unknown user type');  // Handle custom errors from backend
        }
      } catch (error) {
        console.error('Error during login:', error);  // Log fetch error to console
        alert('Failed to connect to the server.');
      }
    },
  });

  return (
    <div className='form-wrapper-login'>
      <div className='form-container'>
        <form onSubmit={formik.handleSubmit}>
          <h2>Login</h2>

          <div>
            <label>Email:</label>  {/* Updated label */}
            <input
              type="email"  // Changed to email input
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>

          <button type="submit" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? 'Logging in...' : 'Login'}
          </button>

          <div className="switch-route">
            <p>Don't have an account? <Link to="/signup">Signup</Link></p>
          </div>
=======
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        // Save token and username in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username); // Assuming API returns username
        localStorage.setItem('userId', data.user_id); // Save user ID if needed
        console.log('Login successful! Token and username saved.');
        navigate('/'); // Redirect after login
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage('Error logging in, please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">Log In</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
>>>>>>> 6e24f03fe32c940ca27ef850248ada6cb20280d3
        </form>
      </div>
    </div>
  );
};

export default Login;
