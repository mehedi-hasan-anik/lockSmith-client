import React from 'react';

const ReviewHomeCard = ({event}) => {
    return (
        <div className="container card card-area mt-3">
         <h5>{event.name}</h5>
         <p>{event.company}</p>
         <p>{event.description}</p>
    </div>
    );
};

export default ReviewHomeCard;