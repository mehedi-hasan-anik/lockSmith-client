import React, { useEffect, useState } from 'react';
import ReviewHomeCard from '../ReviewHomeCard/ReviewHomeCard';

const ReviewHome = () => {
    const [reviewHome,setReviewHome]=useState([])
     useEffect(()=>{
         fetch('http://localhost:8080/getReview')
         .then(res=>res.json())
         .then(data=>setReviewHome(data))
     },[])
     
    return (
        <div className="container">
            <h2 className="text-center text-primary" style={{margin:'70px 0px'}}> Testimonials </h2>
            <div className="row">
            {
                  reviewHome.map(event=> <div className="col-lg-4 col-md-6 col-sm-12 col-area"><ReviewHomeCard event={event}></ReviewHomeCard></div>)
            }
            </div>
        </div>
    );
};

export default ReviewHome;