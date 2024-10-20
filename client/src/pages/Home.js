import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (q) => {
    setQuery(q);
  };

  return (
    <div className="home">
      <h1>Welcome to Prestige Properties</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Add more content like featured properties */}
    </div>
  );
}

export default Home;
