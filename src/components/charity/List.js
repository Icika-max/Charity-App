import React, { useState } from "react";
import DisplaySelected from "./DisplaySelected";

function List({ list }) {
  const [visibleDetails, setVisibleDetails] = useState(false);
  function handleClick(){
    setVisibleDetails(!visibleDetails)
  }
  return (
    <div className="card" onClick={handleClick}>
      <img src={list?.logoUrl} alt='random'/>
      <h3>{list?.name}</h3>
      { visibleDetails ? <DisplaySelected data={list}/> : ""}
    </div>
  );
}

export default List;
