import React from "react";

function Search({ setSearch, search, data }) {
  return (
    <>
      <select>
        {data &&
          data.map((item, index) => {
            return <option key={index}>{item.themes.theme.name}</option>;
          })}
      </select>
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
    </>
  );
}

export default Search;
