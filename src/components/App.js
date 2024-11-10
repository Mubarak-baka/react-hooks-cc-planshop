import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    fetch("https://react-hooks-cc-planshop-2.onrender.com/plants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      })
      .finally(() => {
        setLoading(false); 
      });
  }, []);

  const addPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  const markAsSoldOut = (name) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.name === name ? { ...plant, inStock: !plant.inStock } : plant
      )
    );
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      {loading ? ( 
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <PlantPage
          plants={filteredPlants}
          addPlant={addPlant}
          markAsSoldOut={markAsSoldOut}
          setSearchTerm={setSearchTerm}
        />
      )}
    </div>
  );
}

export default App;