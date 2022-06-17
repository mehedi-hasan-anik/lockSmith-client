import { useHistory } from "react-router";
import "./Photo.css";

const Photo = ({ event }) => {
  console.log("price", event);

  const history = useHistory();
  const handleCheckOut = (id) => {
    history.push(`/order/${id}`);
  };
  return (
    <div className="container">
      <div className=" inner-cart-area">
        <img
          style={{ width: "100%", height: "200px" }}
          src={event.imageURL}
          alt=""
        />
        <div className="button-text-wrapper">
          <h5>{event.title}</h5>
          <p className="details">{event.description}</p>
          <p>
            Price: <strong>${event.price}</strong>
          </p>
          <button onClick={() => handleCheckOut(event._id)}>Get Now</button>
        </div>
      </div>
    </div>
  );
};

export default Photo;
