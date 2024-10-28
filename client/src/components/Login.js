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
        </form>
      </div>
=======
import React, { useState } from 'react';
import '../styles/Login.css'; // Importing the corresponding CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);

    try {
      const response = await fetch('https://your-api-endpoint.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Login successful:', data);
      // Handle successful login (e.g., save token, redirect, or show a success message)
    } catch (error) {
      console.error('Error:', error);
      // Optionally, handle the error (e.g., show an error message)
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
>>>>>>> 913351bb (done some changes)
    </div>
  );
};

export default Login;
