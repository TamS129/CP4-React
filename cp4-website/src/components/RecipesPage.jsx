/**
Name: Tamara Slone
Date: 11/29/24
Description:This component grabs the recipe layout from RecipeLayout and organizes the data of the recipes into a single page. It also functions to add comments using localstorage.
*/
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { database } from "../firebase";
import RecipeLayout from './recipecomponets/RecipeLayout';
import Header from './Header';
import Footer from './Footer';
import '../css/recipes.css';

function RecipesPage() {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    if (!id) return;

    const recipeRef = ref(database, `recipes/${id}`);
    onValue(recipeRef, (snapshot) => {
      const data = snapshot.val();
      setRecipe(data);
    });
  }, [id]);

  const addComment = (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComments = [...comments, commentText];
    setComments(newComments);
    localStorage.setItem(`comments-${id}`, JSON.stringify(newComments));
    setCommentText('');
  };

  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
    setComments(savedComments);
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <>
    <Header tagline="From the heart of Applachia" />
    
    <div className="recipe-page">
      <RecipeLayout
        recName={recipe.recName}
        author={recipe.author}
        ingred={recipe.ingredients}
        instructions={recipe.instructions}
        time={recipe.timeToCook}
        image={recipe.image}  
      />
  
      <div className="comment-section">
        <h3>Reviews</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <span>Anonymous user:</span>
              <p>{comment}</p>
            </li>
          ))}
        </ul>
        <form onSubmit={addComment}>
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
            rows="3"
          />
          <button type="submit">Add Comment</button>
        </form>
      </div>
    </div>
    <Footer tagline="Preserve the flavors of Appalachia." />
  </>
  
  );
}

export default RecipesPage;
