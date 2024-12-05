import React from "react";
import { Link } from "react-router-dom";
import '../css/home.css';

const HomePage = () => (
  <div className="home-page">
    <div className="home-text-background">
    <div className="home-image">
      <img 
        src="/images/logo.png" 
        alt="Coal Miner" 
        className="home-image-img"
      />
    </div>
      <h1 className="home-title">Welcome to Coal Miners Cookbook</h1>
      <p className="home-description">Discover recipes from the heart of Appalachia, where tradition and flavor meet.</p>
    </div>
    <div className="home-buttons">
      <button className="home-button">
        <Link to="/about" className="home-link">
          About
        </Link>
      </button>

      <button className="home-button">
        <Link to="/recipes" className="home-link">
          Recipes
        </Link>
      </button>
    </div>
  </div>
);

export default HomePage;

