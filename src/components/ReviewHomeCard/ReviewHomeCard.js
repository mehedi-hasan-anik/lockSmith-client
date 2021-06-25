import React from 'react';
import './ReviewHomeCard.css'

const ReviewHomeCard = ({event}) => {
    return (
      <div className="review-area">
         <div className="container">
           <div className="card card-area mt-3" style={{borderRadius:'10px', background:'grey',color:'white'}}>
                <h3>{event.name}</h3>
                <p>{event.company}</p>
                <p>{event.description}</p>
           </div>
         </div>
      </div>
    );
};

export default ReviewHomeCard;