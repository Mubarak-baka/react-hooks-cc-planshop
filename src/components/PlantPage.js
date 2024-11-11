import React from "react";
import NewPlantForm from "./NewPlantForm"; // Importss form to add new plants
import PlantList from "./PlantList"; // Importss list to display plants
import Search from "./Search"; // Importss search component for filtering plants

function PlantPage({ plants, addPlant, markAsSoldOut, setSearchTerm, removePlant }) {
  return (
    <main>
      {/* Form to add a new plant */}
      <NewPlantForm addPlant={addPlant} />
      
      {/* Search component to filter plants */}
      <Search setSearchTerm={setSearchTerm} />
      
      {/* List of plants with options to mark as sold out and remove plants*/}
      <PlantList 
        plants={plants} 
        markAsSoldOut={markAsSoldOut} 
        removePlant={removePlant} // Function to remove a plant
      />
    </main>
  );
}

export default PlantPage;