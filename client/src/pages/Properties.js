import React, { useState, useEffect } from 'react';
import PropertyList from '../components/PropertyList';
import Filter from '../components/Filter';

const Properties = () => {
  const [properties, setProperties] = useState([]); // State for storing properties
  const [filter, setFilter] = useState('');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  // Fetch properties from the backend
  const fetchProperties = async () => {
    try {
      const response = await fetch('http://localhost:5000/properties'); // Update URL if needed
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProperties(data); // Set the properties state
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };

  // Use useEffect to fetch properties when the component mounts
  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="properties">
      <h1>Property Listings</h1>
      <Filter onFilterChange={handleFilterChange} />
      <PropertyList properties={properties} filter={filter} /> {/* Pass properties here */}
    </div>
  );
}

export default Properties;
