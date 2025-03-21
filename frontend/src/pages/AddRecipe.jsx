import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/AddRecipe.css";

const AddRecipe = ({ setRecipes }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); 
    }
  };

  const handleShare = () => {
    if (!name || !description || !image) {
      alert("Please fill all fields!");
      return;
    }
    const newRecipe = {
      id: Date.now(),
      name,
      image,
      recipe: description
    };
    setRecipes((prev) => [...prev, newRecipe]);
    navigate("/"); 
  };

  return (
    <div className="add-recipe-container">
      <h2 className="title">Add Recipes to Tasty Tales</h2>

      <div className="form-container">
        
        <div className="upload-container">
          <label className="upload-box">
            {image ? <img src={image} alt="Preview" className="preview" /> : "Click to Upload Image"}
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </label>
        </div>

        
        <div className="input-container">
          <input
            type="text"
            placeholder="Name"
            className="name-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <textarea
            placeholder="Description"
            className="desc-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="share-button" onClick={handleShare}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
