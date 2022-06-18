import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import ManageServiceCard from "../ManageServiceCard/ManageServiceCard";

const ManageService = () => {
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

  const manageResult = servicePhoto.filter((event) => event.imageURL);

  return (
    <div className="container pt-3" style={{ background: "#F8F8F8" }}>
      {loading && (
        <div className="row">
          {manageResult.map((event) => (
            <div className="col-lg-6  col-sm-12 pt-3 pb-3 col-area">
              <ManageServiceCard event={event}></ManageServiceCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageService;
