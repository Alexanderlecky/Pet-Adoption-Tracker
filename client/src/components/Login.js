import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import '../styles/Login.css';


const Login = () => {
  const [formData, setFormData] = useState({
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
          const response = await axios.post('http://localhost:5000/login', formData);
          console.log('Login successful:', response.data);
          // Redirect to the dashboard or home page after login
          navigate('/dashboard'); // Adjust the route as necessary
      } catch (error) {
          console.error('Error logging in:', error);
          // Show error message to the user
      }
  };

  return (
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
      </form>
  );
};

export default Login;