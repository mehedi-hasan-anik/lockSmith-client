import "./ReviewHomeCard.css";

const ReviewHomeCard = ({ event }) => {
  return (
    <div className="review-area">
      <div className="container">
        <div className="card card-area mt-3" style={{ borderRadius: "10px" }}>
          <h3>{event.name}</h3>
          <strong>{event.company}</strong>
          <p className="details">{event.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewHomeCard;
