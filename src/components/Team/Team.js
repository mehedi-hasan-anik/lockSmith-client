import First from "../image/first.jpg";
import Second from "../image/second.jpg";
import Third from "../image/third.jpg";
import TeamCard from "../TeamCard/TeamCard";
import "./Team.css";

const Team = () => {
  const ourTeam = [
    {
      photo: First,
      name: "kabir khan",
      email: "kabir@gmail.com",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      photo: Second,
      name: "jamil hasan",
      email: "jamil@gmail.com",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
    {
      photo: Third,
      name: "mehedi ahamed",
      email: "mehedi@gmail.com",
      about: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    },
  ];
  return (
    <div className="team-area">
      <div className="container">
        <h2
          className="text-center"
          style={{ padding: "30px 0px", fontSize: "50px", fontWeight: "700" }}
        >
          {" "}
          People Behind <span style={{ color: "#FF3B3E" }}>Our Services</span>
        </h2>
        <div className="row">
          {ourTeam.map((event) => (
            <div className="col-lg-4 col-md-6 col-sm-12 pb-4 col-area">
              <TeamCard event={event}></TeamCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
