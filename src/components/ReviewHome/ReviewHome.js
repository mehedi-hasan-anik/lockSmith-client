import { useEffect, useState } from "react";
import ReviewHomeCard from "../ReviewHomeCard/ReviewHomeCard";
import "./ReviewHome.css";

const ReviewHome = () => {
  const [reviewHome, setReviewHome] = useState([]);
  useEffect(() => {
    fetch("https://cryptic-spire-90197.herokuapp.com/getReview")
      .then((res) => res.json())
      .then((data) => setReviewHome(data));
  }, []);

  return (
    <div className="review-area-main">
      <div className="container">
        <h2
          className="text-center"
          style={{
            padding: "30px 0px",
            fontSize: "50px",
            fontWeight: "700",
            color: "#FF3B3E",
            wordWrap: "break-word",
          }}
        >
          TESTIMONIALS
        </h2>
        <div className="row">
          {reviewHome.map((event) => (
            <div className="col-lg-4 col-md-6 col-sm-12  col-area">
              <ReviewHomeCard event={event}></ReviewHomeCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewHome;
