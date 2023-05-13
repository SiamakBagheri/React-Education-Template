import { useState } from "react";
import { Link } from "react-router-dom";
import NavList from "./NavList";
import "./style.css";

const Nav = () => {
  const [mobileNavToggle, setMobileNavToggle] = useState(false);
  const [dropdownOne, setDropdownOne] = useState(false);
  const [dropdownTwo, setDropdownTwo] = useState(false);

  return (
    <nav
      id="navbar"
      className={`navbar ${
        mobileNavToggle && "navbar-mobile"
      } order-last order-lg-0 shadow-0`}
    >
      <ul>
        <NavList name="Home" path="/" />
        <NavList name="About" path="/about" />
        <NavList name="Courses" path="/courses" />
        <NavList name="Trainers" path="/trainers" />
        <NavList name="Events" path="/events" />
        <NavList name="Pricing" path="/pricing" />
        <li className="dropdown">
          <Link onClick={() => setDropdownOne(!dropdownOne)}>
            <span>Drop Down</span> <i className="bi bi-chevron-down"></i>
          </Link>
          <ul className={dropdownOne && "dropdown-active"}>
            <li>
              <Link to="#">Drop Down 1</Link>
            </li>
            <li className="dropdown">
              <Link onClick={() => setDropdownTwo(!dropdownTwo)}>
                <span>Deep Drop Down</span>
                <i className="bi bi-chevron-right"></i>
              </Link>
              <ul className={dropdownTwo && "dropdown-active"}>
                <li>
                  <Link to="#">Deep Drop Down 1</Link>
                </li>
                <li>
                  <Link to="#">Deep Drop Down 2</Link>
                </li>
                <li>
                  <Link to="#">Deep Drop Down 3</Link>
                </li>
                <li>
                  <Link to="#">Deep Drop Down 4</Link>
                </li>
                <li>
                  <Link to="#">Deep Drop Down 5</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Drop Down 2</Link>
            </li>
            <li>
              <Link to="#">Drop Down 3</Link>
            </li>
            <li>
              <Link to="#">Drop Down 4</Link>
            </li>
          </ul>
        </li>
        <NavList name="Contact" path="/contact" />
      </ul>
      <i
        className={`bi ${
          mobileNavToggle ? "bi-x" : "bi-list"
        } mobile-nav-toggle`}
        onClick={() => setMobileNavToggle(!mobileNavToggle)}
      ></i>
    </nav>
  );
};

export default Nav;
