import React, { useState } from 'react';
import "../styles/SearchBar.css"; // Ensure this path is correct

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue); // Call the onSearch function passed down as a prop
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="Search properties..."
        value={inputValue}
        onChange={handleChange}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
