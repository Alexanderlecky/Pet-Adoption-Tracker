import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PropertyList from '../components/PropertyList';
import axios from 'axios';

const Home = () => {
  const [query, setQuery] = useState('');
  const [properties, setProperties] = useState([]);

  const handleSearch = (q) => {
    setQuery(q);
  };

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('http://localhost:5000/properties');
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to Prestige Properties</h1>
      <SearchBar onSearch={handleSearch} />
      <PropertyList filter={query} properties={properties} />
    </div>
  );
}

export default Home;
