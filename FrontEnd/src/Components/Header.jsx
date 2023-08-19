import { NavLink } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <>
      <h1 className="header"> Home Page </h1>
      <nav>
        <NavLink to="/login" className="nav-links">
          Login
        </NavLink>

        <NavLink to="register" className="nav-links">
          Sign Up
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
