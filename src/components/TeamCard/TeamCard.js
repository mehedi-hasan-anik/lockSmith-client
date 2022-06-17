import "./TeamCard.css";

const TeamCard = ({ event }) => {
  return (
    <div className="container">
      <div className="single-card">
        <img src={event.photo} alt="" className="img-fluid" />
        <div className="single-card-details">
          <h3>{event.name}</h3>
          <strong>{event.email}</strong>
          <p>{event.about}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
