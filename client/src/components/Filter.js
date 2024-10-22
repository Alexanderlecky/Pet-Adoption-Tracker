import React, { useState } from 'react';


const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setFilter(e.target.value);
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter">
      <input 
        type="text" 
        placeholder="Filter by location" 
        value={filter} 
        onChange={handleChange} 
      />
    </div>
  );
}

export default Filter;
