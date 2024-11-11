import React from "react";

function PlantCard({ plant, markAsSoldOut, removePlant }) {
  
  // Handle the click event to toggle stock status
  const handleSoldOut = () => {
    markAsSoldOut(plant.name);  // Call the passed function to toggle inStock status
  };

  return (
    <li className="card" data-testid="plant-item">
      {/* Display plant image, with a placeholder if image is missing */}
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      {/* displays name,price,and stock status */}
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {plant.inStock ? (
        <button className="primary" onClick={handleSoldOut}>
          In Stock
        </button>
      ) : (
        <button onClick={handleSoldOut}>Out of Stock</button>
      )}
      
      {/* Delete button to remove the plant */}
      <button onClick={() => removePlant(plant.name)}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
