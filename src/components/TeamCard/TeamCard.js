import React from 'react';
import './TeamCard.css';

const TeamCard = ({event}) => {
    return (
        <div className="container card cart2-area pt-3 pb-5">
            <img src={event.photo} alt="" className="img-fluid"/>
            <h3>{event.name}</h3>
           <p>{event.email}</p>
           <p>{event.about}</p>
         </div>
    );
};

export default TeamCard;