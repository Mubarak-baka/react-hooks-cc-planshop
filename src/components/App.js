import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // State variables to manage plants, search term, loading status, and errors
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true); // Indicates if data is being loaded
  const [error, setError] = useState(null); // Holds any error messages

  // Fetch plants data from the API when the component mounts
  useEffect(function() {
    setLoading(true); // Start loading state
    fetch("https://react-hooks-cc-planshop-2.onrender.com/plants")
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON data from the response
      })
      .then(function(data) {
        setPlants(data); // Store fetched plants in state
        setError(null); // Clear any previous errors
      })
      .catch(function(error) {
        console.error("There was a problem please wait:", error);
        setError("OOPS! something went wrong."); // Set error message
      })
     
  }, []); 

  // Function to add a new plant to the list
  function addPlant(newPlant) {
    setPlants(function(prevPlants) {
      return [...prevPlants, newPlant];
    });
    toast.success("Plant added successfully!"); // Show success notification
  }

  // Function to toggle the stock status of a plant
  function markAsSoldOut(name) {
    setPlants(function(prevPlants) {
      return prevPlants.map(function(plant) {
        return plant.name === name ? { ...plant, inStock: !plant.inStock } : plant; // Toggle inStock property
      });
    });
  }

  // Filter plants based on the search term
  const filteredPlants = plants.filter(function(plant) {
    return plant.name.toLowerCase().includes(searchTerm.toLowerCase()); // Case-insensitive search
  });
// function for removing a plant from the list
  function removePlant(name) {
    setPlants(function(prevPlants) {
      return prevPlants.filter(function(plant) {
        return plant.name !== name;
      });
    });
    toast.success("Plant deleted successfully!"); // success message when its deleed
  }

  return (
    <div className="app">
      <ToastContainer /> 
      <Header /> 
      {loading ? ( // Show loader while data is being fetched
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <>
          {error && <div className="error-message">{error}</div>} {/* Display error message if there is one */}
          <PlantPage
          // {functions being passed to the plantpage component}
            plants={filteredPlants} 
            addPlant={addPlant} 
            markAsSoldOut={markAsSoldOut} 
            removePlant={removePlant}
            setSearchTerm={setSearchTerm} 
          />
        </>
      )}
    </div>
  );
}

export default App; 
