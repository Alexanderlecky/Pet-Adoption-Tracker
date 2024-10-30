import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
      email: '',
      password: ''
  });
  const navigate = useNavigate();

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
          const response = await fetch('https://prestige-properties.onrender.com/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
          if (response.ok) {
              const data = await response.json();
              console.log('Login successful:', data);
              navigate('/dashboard');
          } else {
              console.error('Login failed:', response.statusText);
          }
      } catch (error) {
          console.error('Error logging in:', error);
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
