import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../pages/AddRecipe.css";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const baseUrl = process.env.REACT_APP_API_URL;

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file); // Actual File object for backend upload
    }
  };

  const handleShare = async () => {
    if (!name || !description || !image) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("image", image); // Assuming backend supports file upload

      const response = await axios.post(`${baseUrl}/api/recipes`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Recipe shared successfully!");
      navigate("/");

    } catch (error) {
      console.error("Error sharing recipe:", error);
      alert("Failed to share recipe.");
    }
  };

  return (
    <div className="add-recipe-container">
      <h2 className="title">Add Recipes to Tasty Tales</h2>

      <div className="form-container">
        <div className="upload-container">
          <label className="upload-box">
            {image ? (
              <img src={URL.createObjectURL(image)} alt="Preview" className="preview" />
            ) : (
              "Click to Upload Image"
            )}
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
