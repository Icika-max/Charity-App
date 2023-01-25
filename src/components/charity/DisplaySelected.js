function DisplaySelected(props) {
  const { data } = props;
  return (
    <>
      <h3>{data.country || data.state || data.city}</h3>
      {/* <h5>
        Present in : {data.countries.country.name}
      </h5> */}
      {data.countries.country.name && data.countries.country.name ? (
        <h5>Present in : {data.countries.country.name}</h5>
      ) : null}
      <p>{data.mission}</p>
      <button>Donate</button>
    </>
  );
}

export default DisplaySelected;
