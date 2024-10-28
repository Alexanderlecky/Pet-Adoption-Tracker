
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>Property Management</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/about">About</Link>
<<<<<<< HEAD
=======
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
>>>>>>> 913351bb (done some changes)
      </nav>
    </header>
  );
};

export default Header;
