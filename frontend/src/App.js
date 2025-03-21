import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FoodDetail from "./pages/FoodDetail";
import Register from "./pages/Register";
import AddRecipe from "./pages/AddRecipe";
import Login from "./pages/Login";

const App = () => {
  const [recipes, setRecipes] = useState([]); 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home recipes={recipes} />} />
        <Route path="/food/:id" element={<FoodDetail recipes={recipes} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addrecipe" element={<AddRecipe setRecipes={setRecipes} />} />
      </Routes>
    </Router>
  );
};

export default App;
