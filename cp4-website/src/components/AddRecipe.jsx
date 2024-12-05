/**
Name: Tamara Slone
Date: 12/3/24
Description:This is a component that holds the form that allows a user to post a new recipe to the website. It also updates the firebase database in real time. 
*/
import React from 'react';
import { database } from "../firebase";
import { ref, set, push } from "firebase/database";
import Header from './Header';
import Footer from './Footer'; 
import '../css/addrecipe.css';

class AddRecipe extends React.Component {
  recNameRef = React.createRef();
  authorRef = React.createRef();
  typeRef = React.createRef();
  descripRef = React.createRef();
  instructRef = React.createRef();
  timeRef = React.createRef();
  ingredRef = React.createRef();
  imageRef = React.createRef();

  newRecipe = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    const recipe = {
      recName: this.recNameRef.current.value,
      author: this.authorRef.current.value,
      type: this.typeRef.current.value, // Updated field name
      description: this.descripRef.current.value,
      instructions: this.instructRef.current.value,
      timeToCook: this.timeRef.current.value,
      ingredients: this.ingredRef.current.value.split(','),
      image: this.imageRef.current.value,
    };
    console.log("Recipe data:", recipe);

    const recipesRef = ref(database, 'recipes');
    const newRecipeRef = push(recipesRef);
    set(newRecipeRef, recipe)
      .then(() => {
        console.log("Recipe added successfully!");
      })
      .catch((error) => {
        console.error("Error adding recipe:", error);
      });

    event.currentTarget.reset();
  };

  render() {
    return (
      <>
      <Header tagline="From the heart of Appalachia." />
      <div className="add-recipe-page">
  <h2>Add Your Own Recipe</h2>
  <form className="recipe-form" onSubmit={this.newRecipe}>
    <input ref={this.recNameRef} type="text" placeholder="Recipe Name" required />
    <select ref={this.typeRef} required>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="dinner">Dinner</option>
      <option value="desserts">Desserts</option>
    </select>
    <input ref={this.authorRef} type="text" placeholder="Author Name" required />
    <input ref={this.timeRef} type="text" placeholder="Time to Cook" required />
    <input ref={this.descripRef} type="text" placeholder="Description" required />
    <input ref={this.ingredRef} type="text" placeholder="Ingredients (comma separated)" required />
    <input ref={this.instructRef} type="text" placeholder="Instructions" required />
    <input ref={this.imageRef} type="text" placeholder="Image URL" required />
    <button type="submit">Create Recipe</button>
    </form>
   </div>
      <Footer tagline="From the heart of Appalachia." />
      </>
    );
  }
}

export default AddRecipe;
