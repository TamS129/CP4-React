/**
Name: Tamara Slone
Date: 12/1/24
Description:This the main page that showcases all recipes within the website. It calls to the recipe component to get into the firebase database.
 It also features a filtering system that allows the user to filter the recipes based on type. 
*/
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ref, onValue } from 'firebase/database';
import { database } from "../firebase";
import '../css/app.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const recipesRef = ref(database, "recipes");

    onValue(recipesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const fetchedRecipes = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      setRecipes(fetchedRecipes);
      setFilteredRecipes(fetchedRecipes);
    });
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredRecipes(recipes);
    } else {
      setFilteredRecipes(recipes.filter((recipe) => recipe.type === filter)); 
    }
  }, [filter, recipes]);

  const handleFilterChange = (type) => {
    setFilter(type); 
  };

  return (
    <>
    <Header tagline="Recipes from the heart of Appalachia" />
    <div className="recipe-list-page"> 
      <div className="filter-navigation">
        <ul className="filter-list">
          <li><Link to="#" onClick={() => handleFilterChange('breakfast')}>Breakfast</Link></li>
          <li><Link to="#" onClick={() => handleFilterChange('lunch')}>Lunch</Link></li>
          <li><Link to="#" onClick={() => handleFilterChange('dinner')}>Dinner</Link></li>
          <li><Link to="#" onClick={() => handleFilterChange('desserts')}>Desserts</Link></li>
          <li><Link to="#" onClick={() => handleFilterChange('all')}>All</Link></li>
        </ul>
      </div>

      {/* Recipe Grid Layout */}
      <div className="recipe-grid">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map(recipe => (
            <div className="recipe-card" key={recipe.id}>
              <img src={recipe.image} alt={recipe.recName} className="recipe-image" />
              <h3>{recipe.recName}</h3>
              <p>{recipe.description}</p>
              <Link to={`/recipe/${recipe.id}`} className="view-recipe-link">View Recipe</Link>
            </div>
          ))
        ) : (
          <p>No recipes found!</p>
        )}
      </div>

      <div className="submit-recipe-section">
        <h2>Want to share your love for the food from Appalachia? Contribute to the cookbook and insert your own recipe here!</h2>
        <button><Link to="/addrecipe">Submit your own recipe!</Link></button>
      </div>
    </div>
    <Footer tagline="Recipes from the Heart of Appalachia" />
  </>
  );
}

export default App;
