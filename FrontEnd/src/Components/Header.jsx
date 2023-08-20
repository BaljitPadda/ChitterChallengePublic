import { NavLink } from "react-router-dom";
import "../css/Header.css";
import PropTypes from "prop-types";

const Header = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    window.localStorage.removeItem("userData");
    props.userData.username = null;
    props.userData.isLoggedIn = false;
    window.location.reload(false);
  };

  return (
    <>
      <h1 className="header"> {props.title} </h1>
      <nav>
        {!props.userData.userIsLoggedIn && (
          <NavLink to="/login" className="nav-links">
            Login
          </NavLink>
        )}

        {!props.userData.userIsLoggedIn && (
          <NavLink to="/register" className="nav-links">
            Sign Up
          </NavLink>
        )}

        {props.userData.userIsLoggedIn && (
          <button
            type="button"
            onClick={handleClick}
            className="log-out-button"
          >
            Log Out
          </button>
        )}
        {/* {props.userData.userIsLoggedIn && <Navigate to="/" />} */}
      </nav>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  userData: PropTypes.any.isRequired,
};

Header.defaultProps = {
  title: "Default title",
};

export default Header;
