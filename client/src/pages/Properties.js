import React, { useState } from 'react';
import PropertyList from '../components/PropertyList';
import Filter from '../components/Filter';

const Properties = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="properties">
      <h1>Property Listings</h1>
      <Filter onFilterChange={handleFilterChange} />
      <PropertyList filter={filter} />
    </div>
  );
}

export default Properties;
