import React from "react";

function PlantCard({ plant, markAsSoldOut }) {
  const handleSoldOut = () => {
    markAsSoldOut(plant.name);
  };

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image || "https://via.placeholder.com/400"} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {plant.inStock ? (
        <button className="primary" onClick={handleSoldOut}>
          In Stock
        </button>
      ) : (
        <button onClick={handleSoldOut}>Out of Stock</button>
      

      )}

    </li>
  );
}

export default PlantCard;