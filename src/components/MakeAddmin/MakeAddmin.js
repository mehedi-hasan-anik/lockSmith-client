import { useForm } from "react-hook-form";
import "./MakeAddmin.styles.css";

const MakeAddmin = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    const addData = {
      email: data.email,
    };
    fetch("https://cryptic-spire-90197.herokuapp.com/addEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addData),
    }).then((res) => console.log("server side response", res));

    console.log("result", addData);
  };
  return (
    <div
      className="main-makeAdmin-area"
      style={{ background: "#F8F8F8", padding: "250px 0px" }}
    >
      <div className="container">
        <div style={{ margin: "0 auto", width: "100%", maxWidth: "300px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              name="email"
              defaultValue=""
              ref={register}
              placeholder="email"
              style={{ padding: "5px 10px", borderRadius: "5px 0px 0px 5px" }}
            />
            <input
              type="submit"
              style={{
                background: "#FF3B3E",
                padding: "5px 10px",
                borderRadius: "0px 5px 5px 0px",
                color: "white",
                fontWeight: "500",
              }}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MakeAddmin;
