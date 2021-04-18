import React from 'react';

const TeamCard = ({event}) => {
    return (
        <div className="container card card-area mt-3">
            <img src={event.photo} alt="" className="img-fluid"/>
            <h5>{event.name}</h5>
           <p>{event.email}</p>
           <p>{event.about}</p>
         </div>
    );
};

export default TeamCard;