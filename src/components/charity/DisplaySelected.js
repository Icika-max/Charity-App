function DisplaySelected(props) {
  const { data } = props;
  return (
    <>
      <h3>{data.country || data.state || data.city}</h3>
      <h4>Category : {data.category}</h4>
      {data.countries.country.name && data.countries.country.name ? (
        <h4>Present in : {data.countries.country.name}</h4>
      ) : null}
      <p>Mission : {data.mission}</p>
      <button className="donateBtn" onClick={() => console.log(data.id)}>Donate</button>
    </>
  );
}

export default DisplaySelected;
