import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/Signup.css'; // Importing the corresponding CSS file

const Signup = () => {
  const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: ''
  });
  const navigate = useNavigate(); // Initialize navigate function

  const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  const handleSubmit = async (event) => {
      event.preventDefault();
      try {
          const response = await axios.post('http://localhost:5000/signup', formData);
          console.log('Signup successful:', response.data);
          // Redirect to login or dashboard after signup
          navigate('/login'); // Adjust the route as necessary
      } catch (error) {
          console.error('Error signing up:', error);
          // Show error message to the user
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              required
          />
          <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
          />
          <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
          />
          <button type="submit">Sign Up</button>
      </form>
  );
};

export default Signup;