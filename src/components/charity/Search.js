import React from "react";

function Search({ setSearch,search }) {
  return (
    <div className="searchSection">
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Search here..."
      />
      <button>Search</button>
    </div>
  );
}

export default Search;