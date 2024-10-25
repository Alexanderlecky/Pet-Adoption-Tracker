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
    </div>
  );
};

export default Login;
