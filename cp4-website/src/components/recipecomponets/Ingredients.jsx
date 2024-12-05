/**
Name: Tamara Slone
Date: 11/24/24
Description:This is a subcomponent that organizes the ingredient list for the recipe.
*/
import React from 'react';

const Ingredients = ({ ingredients }) => {
  return (
    <div className="ingredients">
        <h3>What you will need: </h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default Ingredients;
