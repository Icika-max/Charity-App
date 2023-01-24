import React from "react";

function List({ list, selectOrg }) {
  return (
    <div className="card" onClick={selectOrg}>
      <img src={list.logoUrl} />
      <h3>{list.name}</h3>
    </div>
  );
}

export default List;
