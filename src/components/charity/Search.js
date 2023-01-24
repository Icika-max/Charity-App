import React,{useState,useEffect} from "react";

function Search({ setSearch, search, data, setNewData }) {
  const [selectedCategory, setSelectedCategory] = useState('')


  useEffect(() => {
    if(selectedCategory === null || selectedCategory === ''){
      setNewData(data)
      return
    }
    const filteredCategory = data.filter(category => category.category === selectedCategory)
    setNewData(filteredCategory);
  }, [selectedCategory]);

  return (
    <>
      <select onChange={(event) => setSelectedCategory(event.target.value)}>
        <option value={''}>All Categories</option>
        {data &&
          data.map((item, index) => {
            return <option key={index} value={item.category}>{item.category}</option>;
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
