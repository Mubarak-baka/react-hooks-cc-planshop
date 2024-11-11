import React from "react";
import PlantCard from "./PlantCard"; 

function PlantList({ plants, markAsSoldOut, removePlant }) {
  return (
    <ul className="cards">
      {/* Map through the plants array and create a PlantCard for each plant */}
      {plants.map((plant) => (
        <PlantCard 
          key={plant.name} 
          plant={plant} // Pass the plant object to the PlantCard
          markAsSoldOut={markAsSoldOut} // Function to mark plant as sold out
          removePlant={removePlant} // Function to remove the plant
        />
      ))}
    </ul>
  );
}

export default PlantList; 