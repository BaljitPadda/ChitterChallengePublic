import { Route, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import PeepsPage from "./PeepsPage";
import "../css/Login.css";
import { useEffect, useState } from "react";

const Login = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {});

  const getUser = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/login/${username.value}`,
        {
          name: name.value,
          username: username.value,
          email: email.value,
          password: password.value,
        }
      );
      if (response.status == 200) {
        props.userData.username = username.value;
        props.userData.userIsLoggedIn = true;
        window.localStorage.setItem("userData", JSON.stringify(props.userData));
        setLoggedIn(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    getUser();
  };

  return (
    <>
      <h4> Login Page </h4>
      <form className="login-form" onSubmit={handleSubmit}>
        <label className="label" htmlFor="name">
          Name
        </label>
        <input type="text" name="name" id="name" />
        <br />
        <label className="label" htmlFor="username">
          Username
        </label>
        <input type="text" name="username" id="username" />
        <br />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input type="text" name="email" id="email" />
        <br />
        <label className="label" htmlFor="password">
          Password
        </label>
        <input type="password" name="password" id="password" />
        <br />
        <input type="submit" value="Login" name="login" />
      </form>
      {props.userData.userIsLoggedIn && <Navigate to="/" />}
    </>
  );
};

export default Login;

Login.propTypes = {
  userData: PropTypes.any.isRequired,
};
