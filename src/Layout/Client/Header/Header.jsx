import { Link } from "react-router-dom";
import Nav from "../../../Components/Nav/Nav";
import "./style.css";

const Header = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto">
          <a href="index.html">Mentor</a>
        </h1>
        <a href="index.html" className="logo me-auto">
          <img src="assets/img/logo.png" alt="" className="img-fluid" />
        </a>

        <Nav />

        <Link to="courses.html" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Header;
