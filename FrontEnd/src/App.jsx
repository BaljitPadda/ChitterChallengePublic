import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";
import PeepsPage from "./Components/PeepsPage";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";

function App() {
  const [userData, setUserData] = useState({});
  const [peeps, setPeeps] = useState([]);

  const getPeeps = async () => {
    try {
      const response = await axios.get("http://localhost:3000/peeps");
      return response.data;
    } catch (e) {
      console.log("No peeps found");
      return [];
    }
  };

  useEffect(() => {
    const getData = async () => {
      setPeeps(await getPeeps());
    };
    let cache = window.localStorage.getItem("userData");
    console.log(cache);
    if (cache != null) {
      setUserData(JSON.parse(cache));
    }
    setTimeout(() => getData(), 0);
  }, []);

  return (
    <>
      <Router>
        <Header title="Home Page" userData={userData} />
        <Routes>
          <Route
            path="/"
            element={<PeepsPage dataArray={peeps} userData={userData} />}
          >
            {/* <PeepsPage dataArray={peeps} /> */}
          </Route>
          <Route path="/login" element={<Login userData={userData} />}>
            {/* <Login /> */}
          </Route>
          <Route path="/register" element={<SignUp />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
