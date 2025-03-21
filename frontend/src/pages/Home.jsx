import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { FaPlus } from "react-icons/fa";

const Home = ({ recipes }) => {
  const navigate = useNavigate();

 
  const defaultFoodItems = [
    { id: 1, name: "Chicken Biriyani", image: "/images/biriyani.jpg" },
    { id: 2, name: "Curd Rice", image: "/images/curd rice.webp" },
    { id: 3, name: "Tamarind Rice", image: "/images/puli saatham.jpg" }
  ];

 
  const allFoodItems = [
    ...defaultFoodItems,
    ...recipes.map((recipe, index) => ({
      id: defaultFoodItems.length + index + 1, 
      ...recipe
    }))
  ];

  return (
    <div className="home-container">
      <h1 className="title">Explore into the Tasty Tales</h1>
      <div className="food-grid">
        {allFoodItems.map((food) => (
          <div
            key={food.id}
            className="food-item"
            onClick={() => navigate(`/food/${food.id}`)} 
          >
            <img src={food.image} alt={food.name} className="food-image" />
            <p className="food-name">{food.name}</p>
          </div>
        ))}
      </div>
      <button className="add-recipe-btn" onClick={() => navigate("/AddRecipe")}>
        <FaPlus className="plus-icon" />
      </button>
    </div>
  );
};

export default Home;
