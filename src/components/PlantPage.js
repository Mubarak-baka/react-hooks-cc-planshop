import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addPlant, markAsSoldOut, setSearchTerm }) {
  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search setSearchTerm={setSearchTerm} />
      <PlantList plants={plants} markAsSoldOut={markAsSoldOut} 
   
       />
      
    </main>
  );
}

export default PlantPage;