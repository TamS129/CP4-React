import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInWithPopup } from 'firebase/auth';  
import { auth, googleAuthProvider } from '../firebase'; 
import '../css/header.css';

const Header = props => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(prevState => !prevState);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
      console.log('Logged in with Google');
    } catch (error) {
      console.error('Error during login: ', error);
    }
  };

  return (
    <header className="top">
      <img src="../images/logowithouttext.png" alt="Coal Miner’s Cookbook Logo" className="logo" />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/recipes">Recipes</Link></li>
      </ul>

      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <button onClick={handleLogin}><Link to="/login">Login</Link></button>
    </header>
  );
};

Header.propTypes = {
  tagline: PropTypes.string.isRequired,
};

export default Header;
