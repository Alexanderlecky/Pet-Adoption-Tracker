import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/Signup.css'; // Importing the corresponding CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);     // State for error messages
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [success, setSuccess] = useState(false); // State for success message
  const navigate = useNavigate();                // For redirection after signup

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);       // Clear any previous errors
    setSuccess(false);    // Reset success message
    setLoading(true);     // Show loading indicator

    try {
      const response = await fetch('/signup', { // Use actual endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Try to read the response as text and parse it
        const errorText = await response.text();
        const errorData = errorText ? JSON.parse(errorText) : {}; // Parse if possible
        throw new Error(errorData.message || 'Signup failed. Please try again.');
      }

      const data = await response.json();
      console.log('Signup successful:', data);

      setSuccess(true);  // Show success message
      setFormData({ username: '', email: '', password: '' });  // Reset form fields

      // Redirect to login or home page after a delay
      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      console.error('Error:', error);
      setError(error.message);  // Display error message
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}      {/* Display error message if any */}
        {success && <p className="success-message">Signup successful! Redirecting to login...</p>} {/* Success message */}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
