import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import HomePage from "./HomePage";
import AboutPage from "./About";
import RecipesPage from "./RecipesPage";
import Login from './recipecomponets/Login';
import AddRecipe from "./AddRecipe";
import SearchResults from "./SearchResults";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path ="/about" element = {<AboutPage />}/>
      <Route path="/recipes/" element={<App />} />
      <Route path="/recipe/:id" element={<RecipesPage />} />
      <Route path="/addrecipe" element={<AddRecipe />} />
      <Route path="/login" element={<Login />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="*" element={<NotFound />} />      
    </Routes>
  </BrowserRouter>
);

export default Router;