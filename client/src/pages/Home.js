import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
// import Login from '../components/Login';
// import Signup from '../components/Signup';

const Home = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (q) => {
    setQuery(q);
  };

  // Inline styles for the home component
  const homeStyle = {
    backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGhvdXNlJTIwZG9vcnxlbnwwfHx8fDE2MzY2MDgzMTk&ixlib=rb-1.2.1&q=80&w=1080")', // Correct direct image link
    backgroundSize: 'cover',    // Ensures the background covers the entire area
    backgroundPosition: 'center', // Centers the image
    backgroundRepeat: 'no-repeat', // Prevents tiling
    height: '100vh',  // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff', // White text for contrast
    textAlign: 'center',
    padding: '0 20px', // Padding for small screens
  };

  // Inline styles for heading
  const headingStyle = {
    fontSize: '3rem',
    marginBottom: '20px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add a shadow for better readability
  };

  return (
    <div style={homeStyle}>
      <h1 style={headingStyle}>Welcome to Prestige Properties</h1>
      <SearchBar onSearch={handleSearch} />
      {/* <Login />
      <Signup /> */}
    </div>
  );
}

export default Home;