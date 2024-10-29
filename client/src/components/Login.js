import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);   // State for error messages
  const [loading, setLoading] = useState(false); // State for loading indicator
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);  // Clear any previous errors
    setLoading(true); // Show loading indicator

    try {
      const response = await fetch('/login', { // Use actual endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Try to get the error message from the response
        const errorText = await response.text();
        const errorData = errorText ? JSON.parse(errorText) : {}; // Parse the error response if possible
        throw new Error(errorData.message || 'Invalid login credentials');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      if (data.token) {
        localStorage.setItem('authToken', data.token);  // Save token to localStorage
        navigate('/');  // Redirect to home or another protected page
      }

    } catch (error) {
      console.error('Error:', error);
      setError(error.message);  // Display error message to the user
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}  {/* Display error message if any */}
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
        <button type="submit" disabled={loading}>  {/* Disable button while loading */}
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
