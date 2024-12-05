import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { database } from "../firebase";
import Header from './Header';
import Footer from './Footer';

function SearchResults() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const query = new URLSearchParams(useLocation().search).get("query") || ""; // Handle empty query

    useEffect(() => {
        const recipesRef = ref(database, "recipes");

        onValue(recipesRef, (snapshot) => {
            const data = snapshot.val() || {};
            const fetchedRecipes = Object.keys(data).map((key) => ({
                id: key,
                ...data[key],
            }));

            setRecipes(fetchedRecipes);

            // Filter recipes by search query
            if (query) {
                const searchResults = fetchedRecipes.filter(recipe => 
                    // Ensure recipe.recName exists and is a string before calling .toLowerCase()
                    recipe.recName && recipe.recName.toLowerCase().includes(query.toLowerCase())
                );
                setFilteredRecipes(searchResults);
            } else {
                setFilteredRecipes(fetchedRecipes); // Show all recipes if no query
            }
        });
    }, [query]);

    return (
        <>
        <Header tagline = "From the heart of Applachia"/>
        <div className="search-results">
            <h1>Search Results</h1>
            {filteredRecipes.length > 0 ? (
                <ul>
                    {filteredRecipes.map(recipe => (
                        <li key={recipe.id}>
                            <h3>{recipe.recName}</h3>
                            <p>{recipe.description}</p>
                            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No recipes found for "{query}"</p>
            )}
        </div>
        <Footer tagline = "From the heart of Applachia" />
        </>
    );
}

export default SearchResults;
