import React from 'react';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import '../../css/recipes.css';

const RecipeLayout = ({ recName, author, ingred, instructions, time, image }) => {
    return (
      <div className='recipe_descrip'>
        <div className='recipe_title_container'>
          <h2 className='recipe_title'>{recName}</h2>
          <h3 className='author'>{author}</h3>
        </div>
        
        {/* Add the recipe image below the title and within the container */}
        {image && <img src={image} alt={recName} className="recipe-image" />}
  
        <h3>Total time to cook: {time}</h3>
        <Ingredients ingredients={ingred} />
        <Instructions recName={recName} instructions={instructions} />
      </div>
    );
  };
  export default RecipeLayout;