// Recipes.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getDatabase, ref, onValue } from 'firebase/database';

function Recipes() {
    const [recipes, setRecipes] = useState({});

    useEffect(() => {
        const db = getDatabase();
        const recipesRef = ref(db, 'recipes'); // Path to your recipes in Firebase

        onValue(recipesRef, (snapshot) => {
            const data = snapshot.val();
            setRecipes(data || {});
        });
    }, []);

    return (
        <div className="recipes">
            <h1>All Recipes</h1>
            <ul>
                {Object.keys(recipes).map((id) => (
                    <li key={id}>
                        <Link to={`/recipe/${id}`}>{recipes[id].recName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Recipes;
