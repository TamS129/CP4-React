
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
