import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
      username: '',
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
          const response = await fetch('https://prestige-properties.onrender.com/signup', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(formData)
          });
          if (response.ok) {
              const data = await response.json();
              console.log('Signup successful:', data);
              navigate('/login');
          } else {
              console.error('Signup failed:', response.statusText);
          }
      } catch (error) {
          console.error('Error signing up:', error);
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
