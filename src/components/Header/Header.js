import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import Logo from "../image/locksmith-showing-a-padlock-and-keyhole-141ld.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="full-nav-area">
      <nav class="navbar navbar-expand-lg   container">
        <div class="container-fluid nav-full-area">
          <Link class="navbar-brand" to="/">
            {/* <img src={Logo} alt="" style={{ width: "60px", height: "30px" }} /> */}
            <h1 className="logo">
              L<span>oc</span>kS<span>mi</span>th
            </h1>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <FontAwesomeIcon icon={faBars} className="nav-bar-icon" />
            </span>
          </button>
          <div
            class="collapse navbar-collapse navigation-area"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/review">
                  Review
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/services">
                  Services
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/contact">
                  Contact
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/admin">
                  Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link ms-3" to="/login">
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
