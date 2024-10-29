import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/Signup.css'; // Importing the corresponding CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null); // State for error messages
  const [loading, setLoading] = useState(false); // State for loading indicator
  const [success, setSuccess] = useState(false); // State for success message
  const navigate = useNavigate(); // For redirection after signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);       
    setSuccess(false);    
    setLoading(true);     

    try {
        const response = await fetch('/signup', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || 'Signup failed. Please try again.');
        }

        const data = await response.json();  // Only parse JSON if the response is OK
        console.log('Signup successful:', data);

        setSuccess(true);  
        setFormData({ username: '', email: '', password: '' });  

        setTimeout(() => {
            navigate('/login');
        }, 2000);

    } catch (error) {
        console.error('Error:', error);
        setError(error.message);  
    } finally {
        setLoading(false); 
    }
};

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>} {/* Display error message if any */}
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
        <button type="submit" disabled={loading}> {/* Disable button while loading */}
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
