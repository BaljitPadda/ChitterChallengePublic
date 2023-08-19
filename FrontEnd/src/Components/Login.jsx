import { Route, redirect, useNavigate } from "react-router-dom";
import axios from "axios";
import PeepsPage from "./PeepsPage";

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
      //   <Redirect to="/" />;
      //   window.location.redirect("/");
      //   <Router>
      //     <Routes>
      //       <Route path="/" element={<PeepsPage dataArray={peeps} />} />;
      //     </Routes>
      //   </Router>;
      response.render(`Welcome ${username.value}`);
    }
    return response.data;
  } catch (e) {
    console.log(e);
    return [];
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  getUser();
};

const Login = () => {
  return (
    <>
      <h4> Login Page </h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <br />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" />
        <br />
        <input type="submit" value="Login" name="login" />
      </form>
    </>
  );
};

export default Login;
