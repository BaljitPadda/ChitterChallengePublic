import { useState } from "react";
import { useEffect } from "react";
import "../css/SignUp.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const addUser = async () => {
  try {
    const response = await axios.post("http://localhost:3000/signup", {
      name: fullname.value,
      username: username.value,
      email: email.value,
      password: password.value,
    });
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const SignUp = () => {
  const [registered, setRegistered] = useState(false);

  const [fullname, setFullname] = useState(``);
  const [username, setUsername] = useState(``);
  const [email, setEmail] = useState(``);
  const [password, setPassword] = useState(``);

  useEffect(() => {});

  const handleSubmit = (event) => {
    // event.preventDefault();
    addUser();
    setRegistered(true);
    window.alert("Thanks for signing up. Now please login.");
  };

  return (
    <>
      <h2> Sign up to Chitter </h2>

      <form className="createAccountForm" onSubmit={handleSubmit}>
        <legend> Create an Account</legend>
        <label htmlFor="fullname"></label>
        <input
          type="text"
          name="fullname"
          value={fullname}
          id="fullname"
          placeholder="Your name"
          onChange={(event) => setFullname(event.target.value)}
        />
        <br />
        <label htmlFor="username"></label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          id="username"
          placeholder="Username"
        />
        <br />
        <input
          type="text"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          id="email"
          placeholder="Your email"
        />
        <br />
        <input
          type="text"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          id="password"
          placeholder="Password"
        />
        <br />
        <p>Sign up to Chitter today! Get ready to peep!</p>
        <input
          type="submit"
          value="Submit"
          className="signUpButton"
          name="signup"
        />
      </form>
      {/* {formSubmitted && <Navigate to="/" />} */}
    </>
  );
};

export default SignUp;
