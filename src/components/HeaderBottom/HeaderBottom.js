import "./HeaderBottom.css";

const HeaderBottom = () => {
  return (
    <div className="headerBottom-area">
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 text-area ">
            <div className="text-area-left">
              <div className="inner-text-area-left">
                <h1
                  style={{
                    color: "#FFC800",
                    fontSize: "60px",
                    paddingBottom: "20px",
                  }}
                >
                  Hello and Welcome
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
                <button>Get Service</button>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
