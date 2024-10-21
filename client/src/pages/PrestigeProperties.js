import React, { useEffect, useState } from 'react';
import PropertyList from '../components/PropertyList';
import SearchBar from '../components/SearchBar';

const PrestigeProperties = () => {
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchProperties = async () => {
      const response = await fetch('http://localhost:5000/properties'); // Replace with your API endpoint
      const data = await response.json();
      setProperties(data);
    };

    fetchProperties();
  }, []);

  return (
    <div>
      <h1>Prestige Properties</h1>
      {/* Include your search bar and setFilter logic here */}
      <SearchBar  setFilter={setFilter} />
      <PropertyList properties={properties} filter={filter} />
    </div>
  );
};

export default PrestigeProperties;
