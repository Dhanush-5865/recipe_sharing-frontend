import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FoodDetail.css';

const defaultFoodDetails = {
  1: {
    name: 'Chicken Biriyani',
    image: '/images/biriyani.jpg',
    recipe: 'Cook rice, add spices, mix with marinated chicken, and serve hot'
  },
  2: {
    name: 'Curd Rice',
    image: '/images/curd rice.webp',
    recipe: 'Mix cooked rice with curd, season with mustard, curry leaves, and serve.'
  },
  3: {
    name: 'Tamarind Rice',
    image: '/images/puli saatham.jpg',
    recipe: 'Cook rice, prepare tamarind paste, mix, and serve with fried peanuts.'
  }
};

const FoodDetail = ({ recipes = [] }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipeId = parseInt(id);
  const defaultRecipe = defaultFoodDetails[recipeId];
  const dynamicRecipe = recipes.find((r) => r.id === recipeId);

  const food = dynamicRecipe || defaultRecipe;

  if (!food) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="food-detail-container">
      <h1 className="food-title">Tasty Tales</h1>
      <div className="food-content">
        <img src={food.image} alt={food.name} className="food-image" />
        <div className="food-description">
          <h2>{food.name}</h2>
          <p>{food.recipe}</p>
        </div>
      </div>
      <button className="back-button" onClick={() => navigate('/')}>
        Back to Home Page
      </button>
    </div>
  );
};

export default FoodDetail;
