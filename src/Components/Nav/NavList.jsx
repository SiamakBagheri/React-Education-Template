import { useLocation, Link } from "react-router-dom";

const NavList = ({ name, path }) => {
  let PageCheck = useLocation();
  return (
    <li>
      <Link
        to={path}
        className={PageCheck.pathname === path ? "active" : ""}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavList;
