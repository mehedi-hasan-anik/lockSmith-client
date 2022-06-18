import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import Photo from "../Photo/Photo";
import "./ServiceArea.css";

const ServiceArea = () => {
  // const [servicePhoto,setServicePhoto]=useState([]);
  const [user, setUser, servicePhoto, setServicePhoto] =
    useContext(userContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://cryptic-spire-90197.herokuapp.com/servicePhoto")
      .then((res) => res.json(res))
      .then((data) => {
        setServicePhoto(data);
        setLoading(true);
      });
  }, []);

  const homeResult = servicePhoto.filter((event) => event.imageURL);

  return (
    <div className="main-service-area">
      <div className="container">
        <h2
          className="text-center mb-5"
          style={{ fontSize: "50px", fontWeight: "700", color: "#FF3B3E" }}
        >
          SERVICES
        </h2>

        {loading && (
          <div className="row">
            {homeResult.map((event) => (
              <div className="col-lg-4 col-md-6 col-sm-12 pb-4 col-area">
                <Photo event={event}></Photo>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceArea;
