import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/header.css';

const Header = props => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <header className="top">
      {/* Logo Image as Title */}
      <img src="../images/logowithouttext.png" alt="Coal Miner's Cookbook Logo" className="logo" />

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {/* Navigation and Dropdown */}
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/recipes">Recipe</Link></li>
      </ul>
      <button><Link to="/login">Login</Link></button>
    </header>
  );
};

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
