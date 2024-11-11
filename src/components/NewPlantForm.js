import React, { useState } from "react";

function NewPlantForm({ addPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // Create the new plant object
    const newPlant = {
      name,
      image,
      price,
      inStock: true,
    };

    // Call addPlant function to add the new plant (provided by parent component)
    addPlant(newPlant);

    // Reset form fields
    setName("");
    setImage("");
    setPrice("");
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Plant Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}className="form-control" placeholder="Plant name  "required/>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input type="url" value={image} onChange={(e) => setImage(e.target.value)} className="form-control"placeholder="Image URL"/>
        </div>

        <div className="mb-3"> 
          <label className="form-label">Price</label> <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}  className="form-control" placeholder="Price"  required />
        </div>
        
        <button type="submit" className="btn btn-primary">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
