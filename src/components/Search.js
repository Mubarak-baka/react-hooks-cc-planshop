import React from "react";

function Search({ setSearchTerm }) {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input type="text" id="search" placeholder="Which plant ? "onChange={handleChange}/>
    </div>
  );
}

export default Search;