const Card = ({ item }) => {
  return (
    <div className="col-md-4 card_section" key={item.id}>
      <h5>{item.title}</h5>
      <p>Flight Number:- {item.flight_number ? item.flight_number : 0}</p>
      <p style={{ height: "100px", overflow: "hidden" }}>{item.details}</p>
    </div>
  );
};

export default Card;
